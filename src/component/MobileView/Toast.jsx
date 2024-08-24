import React, { useState } from "react";
import { CloseIcon, SuccessIcon, FailureIcon } from "./ToastIcons";
import { useNavigate } from "react-router-dom";

const Toast = ({ type = "success" , message, redirectTo }) => {
  const [visibility, setVisibility] = useState(true);
  const navigate = useNavigate()

  const icon = {
    success: <SuccessIcon />,
    failure: <FailureIcon />,
  };

  const toastIcon = icon[type] || icon.success;

  const handleAnimation = () => {
    setVisibility(false);
    redirectTo ? navigate(redirectTo) : <></>;
  };

  return (
    <>
      {visibility && (
        <div className="toast" role="alert">
          <div className="toast__main">
            <div className="toast__container">
              <div className="toast__body">
                {toastIcon && <div className="toast__icon">{toastIcon}</div>}

                <div className="toast__message">{message}</div>
              </div>

              <div
                className="toast__close-icon"
                onClick={() => handleAnimation()}
              >
                <CloseIcon />
              </div>
            </div>

            <div
              className={`toast__${type ? type : "success"}`}
              onAnimationEnd={handleAnimation}
            ></div>
          </div>
        </div>
      )}
    </>
  );
};

export default Toast;
