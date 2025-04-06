import type React from "react";
import type { UseFormRegister, FieldError } from "react-hook-form";
import type { ContactUsSchema } from "../../validators/ContactUsSchema";

import "./InputWrapper.css";
import "../ContentDecorations/ContentDecorations.css";

type TextAreaWrapperProps = {
  register: UseFormRegister<ContactUsSchema>;
  error?: FieldError;
  fieldName: keyof ContactUsSchema;
  placeholder: string;
  labelText: string;
  backgroundColor?: string;
};

const TextAreaWrapper: React.FC<TextAreaWrapperProps> = ({
  register,
  error,
  labelText,
  placeholder,
  fieldName,
  backgroundColor = "var(--white)",
}) => {
  return (
    <label className="form__label">
      {labelText}
      <div className={`form__input-wrapper ${error && "error"}`}>
        <textarea
          {...register(fieldName)}
          className="form__input form__textarea"
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

export default TextAreaWrapper;
