import React, { forwardRef } from "react";

const FormInput = forwardRef((props, ref) => {
  const { errorMessage, name, type, placeholder, onChange } = props;

  return (
    <div id="forminput">
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        ref={ref} // Forward the ref directly
      />
      {errorMessage && <span className="errorMessage">{errorMessage}</span>}
    </div>
  );
});

export default FormInput;
