import React, { useState } from "react";
import { CloseIcon, SuccessIcon, FailureIcon } from "./ToastIcons";

const Toast = ({ type = "success" , message }) => {
  const [visibility, setVisibility] = useState(true);

  const icon = {
    success: <SuccessIcon />,
    failure: <FailureIcon />,
  };

  const toastIcon = icon[type] || icon.success;

  const hadleAnimation = () => {
    setVisibility(false);
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
                onClick={() => hadleAnimation()}
              >
                <CloseIcon />
              </div>
            </div>

            <div
              className={`toast__${type ? type : "success"}`}
              onAnimationEnd={hadleAnimation}
            ></div>
          </div>
        </div>
      )}
    </>
  );
};

export default Toast;
