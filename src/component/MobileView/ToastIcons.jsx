import React from "react";
import successImg from "../../assets/icons/icons8-success.svg"
import failureImg from "../../assets/icons/icons-failure.svg"
import closeImg from "../../assets/icons/close-round-white.svg"

const SuccessIcon = () => (
    <img src={successImg} alt="success-img" className="toastify__success"/>
)

const FailureIcon = () => (
    <img src={failureImg} alt='failure-img' className="toastify__failure" />
)

const CloseIcon = () => (
    <img src={closeImg} alt="close-icon" className="toastify__close" />
)

export  { SuccessIcon, FailureIcon, CloseIcon };
