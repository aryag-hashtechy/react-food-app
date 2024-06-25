const BaseFloatingInput = ({
  name,
  id,
  handleChange,
  inputVariant,
  inputType,
  value,
  placeholder,
  errorMessage,
  labelText,
  labelVariant,
  isRequired = true,
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
          required={isRequired}
          disabled={isDisabled}
          value={value}
          autocomplete="off"
          onChange={handleChange}
        />

        <label className="label-name">
          <span className="content-name">{labelText}</span>
        </label>
      </div>

      {errorMessage[name] ? (
        <p className="error-message">{errorMessage[name]}</p>
      ) : (
        <></>
      )}
    </>
  );
};

export default BaseFloatingInput;
