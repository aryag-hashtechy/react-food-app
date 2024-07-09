import react, { useState } from "react";
import BaseFloatingInput from "../component/base/BaseFloatingInput";
import BaseButton from "../component/base/BaseButton";
import axios from "axios";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import backIcon from "../assets/icons/back-icon.svg";
import { parseCookies, setCookie, destroyCookie } from "nookies";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import apiPath from "../apiPath";
import Toast from "../component/MobileView/Toast";
import axiosProvider from "../common/axiosProvider";

const addressSchema = Yup.object().shape({
  addressLine1: Yup.string()
    .required("Address line 1 is required")
    .matches(/^[\w\d\s.,#\-\/]+$/, "only character and digit are allowed"),
  addressLine2: Yup.string()
    .optional()
    .nullable(true)
    .matches(/^[\w\d\s.,#\-\/]+$/, "only character and digit are allowed"),
  city: Yup.string()
    .required("City is required")
    .matches(/^[a-zA-Z]{1,100}$/, "must be character"),
  pincode: Yup.string()
    .required("Pincode is required")
    .matches(/^\d{6}$/, "pincode must me max 6 digits"),
  receiverName: Yup.string()
    .optional()
    .nullable(true)
    .matches(
      /^(?=.{1,25}$)[a-zA-Z]+(?: [a-zA-Z]+)?$/,
      "receiver name must be character"
    ),
  receiverNumber: Yup.string()
    .optional()
    .nullable(true)
    .matches(
      /^[6-9]\d{9}$/,
      "Phone number must be exactly 10 digits and start with a digit between 6 and 9"
    ),
  type: Yup.string().required("Type is required"),
});

const AddressPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");

  const cookies = parseCookies();
  const navigate = useNavigate();

  const [initialValues, setInitialValues] = useState({});
  const [errorMessage, setErrorMessage] = useState(false);
  const accessToken = cookies.accessToken;

  const [toast, setToast] = useState({
    visible: false,
    message: "",
    type: "failure",
  });

  const handlefetch = async () => {
    try {
      let headers = {
        Authorization: `Bearer ${cookies.accessToken}`,
      };

      const response = await axiosProvider({
        method: "GET",
        apiURL: `${apiPath.getsingleaddress}/${id}`,
        headers,
      });

      if (response && response?.status === 200) {
        if (response?.status === 200) {
          setInitialValues(response?.data?.data);
        } else {
          console.log(response.data?.message);
        }
      }
    } catch (error) {
      console.log(error);
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
      err.inner.forEach((fieldError) => {
        obj[fieldError.path] = fieldError.message;
        setErrorMessage(obj);
      });
    }
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      let headers = {
        Authorization: `Bearer ${cookies.accessToken}`,
      };

      const response = await axiosProvider({
        method: id ? "PUT" : "POST",
        apiURL: id ? apiPath.updateAddress + id : apiPath.addAddress,
        bodyData: initialValues,
        headers,
      });

      if (response && response?.status === 200) {
        setToast((items) => ({
          ...items,
          visible: true,
          message: response?.data?.message,
          type: "success",
        }));

        setTimeout((items) => {
          setToast((items) => ({
            ...items,
            visible: false,
          }));
        }, 3000);
      }
    } catch (error) {
      setToast((items) => ({
        visible: true,
        message: error.response?.data?.message,
        type: "failure",
      }));

      setTimeout((items) => {
        setToast((items) => ({
          ...items,
          visible: false,
        }));
      }, 3000);
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
    id ? handlefetch() : <></>;
  }, []);

  return (
    <>
      {toast.visible && <Toast type={toast.type} message={toast.message} />}
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
              value={initialValues}
              handleChange={handleChange}
              errorMessage={errorMessage}
            />

            <BaseFloatingInput
              name="addressLine2"
              id="addressLine2"
              inputType="text"
              labelText="AddressLine 2:"
              isRequired={false}
              handleChange={handleChange}
              value={initialValues}
              errorMessage={errorMessage}
            />

            <BaseFloatingInput
              name="city"
              id="city"
              inputType="text"
              labelText="City:"
              handleChange={handleChange}
              value={initialValues}
              errorMessage={errorMessage}
            />

            <BaseFloatingInput
              name="pincode"
              id="pincode"
              inputType="text"
              labelText="Pincode:"
              handleChange={handleChange}
              value={initialValues}
              errorMessage={errorMessage}
            />

            <BaseFloatingInput
              name="receiverName"
              id="receiverName"
              labelText="Receiver Name:"
              handleChange={handleChange}
              isRequired={false}
              value={initialValues}
              errorMessage={errorMessage}
            />

            <BaseFloatingInput
              name="receiverNumber"
              id="receiverNumber"
              inputType="text"
              isRequired={false}
              labelText="Receiver No:"
              handleChange={handleChange}
              value={initialValues}
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
            <BaseButton
              buttonText="Update"
              variant="btn btn--primary--mobile"
              onClick={handleSubmit}
            />
          </div>
        </form>
      </section>
    </>
  );
};

export default AddressPage;
