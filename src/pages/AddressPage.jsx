import react, { useState } from "react";
import BaseFloatingInput from "../component/base/BaseFloatingInput";
import BaseButton from "../component/base/BaseButton";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import backIcon from "../assets/icons/back-icon.svg";
import { parseCookies, setCookie, destroyCookie } from "nookies";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const addressSchema = Yup.object().shape({
  addressLine1: Yup.string()
    .required("Address line 1 is required")
    .matches(/^[\w\d\s.,#\-\/]+$/, "only character and digit are allowed"),
  addressLine2: Yup.string().matches(
    /^[\w\d\s.,#\-\/]+$/,
    "only character and digit are allowed"
  ),
  city: Yup.string()
    .required("City is required")
    .matches(/^[a-zA-Z]{1,100}$/, "must be character"),
  pincode: Yup.string()
    .required("Pincode is required")
    .matches(/^\d{6}$/, "pincode must me max 6 digits"),
  // reciverName: Yup.string().matches(
  //   /^(?=.{1,25}$)[a-zA-Z]+(?: [a-zA-Z]+)?$/,
  //   "reciver name must be character"
  // ),
  // reciverNumber: Yup.string().when("reciverNumber", {
  //   is: (value) => value && value?.length > 0,
  //   then: Yup.string().matches(
  //     /^[6-9]\d{9}$/,
  //     "Phone number must be exactly 10 digits and start with a digit between 6 and 9"
  //   ),
  //   otherwise: Yup.string(),
  // }),
  type: Yup.string().required("Type is required"),
});

const AddressPage = () => {
  let addressId = useParams();
  const cookies = parseCookies();
  const navigate = useNavigate();

  const [initialValues, setInitialValues] = useState({});
  const [errorMessage, setErrorMessage] = useState(false);
  const accessToken = cookies.accessToken;

  const handlefetch = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/address/get-single-address/${addressId.id}`,
        {
          headers: {
            Authorization: cookies.accessToken
              ? `Bearer ${cookies.accessToken}`
              : "",
          },
        }
      );
      if (response && response?.status === 200) {
        if (response?.data?.code === 200) {
          setInitialValues(response?.data?.data);
        } else {
          console.log(response.data?.message);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  const validate = async (e) => {
    try {
      e.preventDefault();
      await addressSchema.validate(initialValues, { abortEarly: false });
      setErrorMessage(false);
      handleSubmit(e);
    } catch (err) {
      let obj = {};
      setErrorMessage(err.errors);
      err.inner.forEach((fieldError) => {
        obj[fieldError.path] = fieldError.message;
        setErrorMessage(obj);
      });
    }
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const response = await axios.put(
        `http://localhost:5000/api/address/update-address/${addressId.id}`,
        initialValues,
        {
          headers: {
            Authorization: cookies.accessToken
              ? `Bearer ${cookies.accessToken}`
              : "",
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e?.target;
    setInitialValues((draft) => ({
      ...draft,
      [name]: value,
    }));
  };

  const handleRadioChange = (event) => {
    setInitialValues((initialValues) => ({
      ...initialValues,
      type: event.target.value,
    }));
  };

  useEffect(() => {
    handlefetch();
  }, [errorMessage]);

  console.log(initialValues);
  return (
    <section className="mobile__container">
      <img
        src={backIcon}
        alt="back-icon"
        className="profile__back--icon"
        onClick={() => navigate("/address")}
      />
      <div>
        <p className="address__text">My Address</p>
      </div>
      <form onSubmit={validate}>
        <div>
          <BaseFloatingInput
            name="addressLine1"
            id="addressLine1"
            inputType="text"
            labelText="AddressLine 1:"
            value={initialValues?.addressLine1 || ""}
            handleChange={handleChange}
            errorMessage={errorMessage}
          />

          <BaseFloatingInput
            name="addressLine2"
            id="addressLine2"
            inputType="text"
            labelText="AddressLine 2:"
            handleChange={handleChange}
            value={initialValues?.addressLine2 || ""}
            errorMessage={errorMessage}
          />

          <BaseFloatingInput
            name="city"
            id="city"
            inputType="text"
            labelText="City:"
            handleChange={handleChange}
            value={initialValues?.city || ""}
            errorMessage={errorMessage}
          />

          <BaseFloatingInput
            name="pincode"
            id="pincode"
            inputType="text"
            labelText="Pincode:"
            handleChange={handleChange}
            value={initialValues?.pincode || ""}
            errorMessage={errorMessage}
          />

          <BaseFloatingInput
            name="reciverName"
            id="reciverName"
            labelText="Receiver Name:"
            handleChange={handleChange}
            isRequired={false}
            value={initialValues?.reciverName || ""}
            errorMessage={errorMessage}
          />

          <BaseFloatingInput
            name="reciverNumber"
            id="reciverNumber"
            inputType="text"
            isRequired={false}
            labelText="Receiver No:"
            handleChange={handleChange}
            value={initialValues?.reciverNumber || ""}
            errorMessage={errorMessage}
          />

          <div>
            <label className="radio__text">Type: </label>
            <br />
            <div className="radio__btn">
              <div>
                <input
                  type="radio"
                  id="Home"
                  name="addressType"
                  value="Home"
                  checked={initialValues.type === "Home" || null}
                  onChange={handleRadioChange}
                />
                <label htmlFor="Home">Home</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="Work"
                  name="addressType"
                  value="Work"
                  checked={initialValues.type === "Work" || null}
                  onChange={handleRadioChange}
                />
                <label htmlFor="Work">Work</label>
              </div>
            </div>
          </div>
        </div>

        <div className="address__btn">
          <BaseButton buttonText="Update" variant="btn btn--primary--mobile" />
        </div>
      </form>
    </section>
  );
};

export default AddressPage;
