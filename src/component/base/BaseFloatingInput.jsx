const BaseFloatingInput = ({
  name,
  id,
  inputType,
  placeholder,
  handleChange,
  errorMessage,
  labelText,
  value,
  isRequired= true,
  isDisabled = false,
  isFloating = false,
}) => {

  return (
    <>
      <div className="float">
        <input
          type={inputType}
          name={name}
          id={id}
          value={value}
          required = {isRequired}
          disabled={isDisabled}
          onChange={handleChange}
          autoComplete="off"
        />

        <label className="label-name">
          <span className="content-name">{labelText}</span>
        </label>
      </div>
      { errorMessage[name] ? <p className="error-message">{errorMessage[name]}</p> : <></>}
    </>
  );
};

export default BaseFloatingInput;
