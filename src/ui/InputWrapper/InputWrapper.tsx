import type React from "react";
import type { FieldError, UseFormRegister } from "react-hook-form";
import type { ContactUsSchema } from "../../validators/ContactUsSchema";

import "./InputWrapper.css";
import "../ContentDecorations/ContentDecorations.css";

type InputWrapperProps = {
  register: UseFormRegister<ContactUsSchema>;
  error?: FieldError;
  fieldName: keyof ContactUsSchema;
  placeholder: string;
  labelText: string;
  backgroundColor?: string;
};

const InputWrapper: React.FC<InputWrapperProps> = ({
  register,
  error,
  fieldName,
  labelText,
  placeholder,
  backgroundColor = "var(--white)",
}) => {
  return (
    <label className="form__label">
      {labelText}
      <div className={`form__input-wrapper ${error && "error"}`}>
        <input
          {...register(fieldName)}
          className="form__input"
          placeholder={placeholder}
        />
        <div className="content-decoration">
          <span className="top-key" style={{ backgroundColor }}></span>
          <span className="bottom-key-1" style={{ backgroundColor }}></span>
          <span className="bottom-key-2" style={{ backgroundColor }}></span>
        </div>
      </div>
      <p className={`form__input-error ${error && "show"}`}>{error?.message}</p>
    </label>
  );
};

export default InputWrapper;
