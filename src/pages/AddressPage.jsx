import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import endPoints from "../common/endPoints";
import backIcon from "../assets/icons/back-icon.svg";
import axiosProvider from "../common/axiosProvider";
import BaseButton from "../component/base/BaseButton";
import BaseFloatingInput from "../component/base/BaseFloatingInput";
import Toast from "../component/MobileView/Toast";
import { handleToast } from "../lib/GlobalMethods";

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
    .matches(/^\d{6}$/, "Pincode must me max 6 digits"),
  receiverName: Yup.string()
    .optional()
    .nullable(true)
    .matches(
      /^(?=.{1,25}$)[a-zA-Z]+(?: [a-zA-Z]+)?$/,
      "Receiver name must be a character."
    ),
  receiverNumber: Yup.string()
    .optional()
    .nullable(true)
    .matches(/^[6-9]\d{9}$/, "Please enter a valid phone number."),
  type: Yup.string().required("Type is required"),
});

const AddressPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");
  const navigate = useNavigate();

  const [initialValues, setInitialValues] = useState({});
  const [errorMessage, setErrorMessage] = useState(false);
  const [toast, setToast] = useState({
    message: null,
    type: null,
    isVisible: false,
  });

  const handlefetch = async () => {
    try {
      const response = await axiosProvider({
        method: "GET",
        apiURL: `${endPoints.getSingleAddress}/${id}`,
        navigate,
      });

      if (response && response?.status === 200) {
        setInitialValues(response?.data?.data);
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
      err.inner.forEach((fieldError) => {
        obj[fieldError.path] = fieldError.message;
        setErrorMessage(obj);
      });
    }
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const method = id ? "PATCH" : "POST";
      const path = id
        ? `${endPoints.updateAddress}/${id}`
        : endPoints.addAddress;

      const response = await axiosProvider({
        method,
        apiURL: path,
        bodyData: initialValues,
        navigate,
      });

      if (response && response?.status === 200) {
        handleToast(setToast, response);
      }
    } catch (err) {
      if (err?.response) {
        handleToast(setToast, err.response);
      } else {
        console.error(err);
      }
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
    if (id) {
      handlefetch();
    }
  }, []);

  return (
    <>
      {toast.isVisible && <Toast type={toast.type} message={toast.message} />}
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
              <label className="address__radio-label">Type: </label>
              <br />
              <div className="address__radio-btn">
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
              <div>
                <label
                  className="address__radio-label"
                  htmlFor="defaultAddress"
                >
                  Default Address:
                </label>
                <br />

                <div className="address__radio-btn">
                  <div>
                    <input
                      type="radio"
                      id="defaultYes"
                      name="defaultAddress"
                      value={true}
                      checked={
                        initialValues?.defaultAddress === true ||
                        initialValues?.defaultAddress === "true"
                      }
                      onChange={handleChange}
                    />

                    <label htmlFor="defaultYes">Yes</label>
                  </div>

                  <div>
                    <input
                      type="radio"
                      id="defaultNo"
                      name="defaultAddress"
                      value={false}
                      checked={
                        initialValues?.defaultAddress === false ||
                        initialValues?.defaultAddress === "false"
                      }
                      onChange={handleChange}
                    />

                    <label htmlFor="defaultNo">No</label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="address__btn">
            <BaseButton
              buttonText={id ? "Update" : "Add"}
              variant="btn btn--primary--mobile"
            />
          </div>
        </form>
      </section>
    </>
  );
};

export default AddressPage;
