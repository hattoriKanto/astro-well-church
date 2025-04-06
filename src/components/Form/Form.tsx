import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  contactUsSchema,
  type ContactUsSchema,
} from "../../validators/ContactUsSchema";
import FormButton from "../../ui/Button/FormButton";
import InputWrapper from "../../ui/InputWrapper/InputWrapper";
import TextAreaWrapper from "../../ui/InputWrapper/TextAreaWrapper";

import "./Form.css";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactUsSchema>({
    resolver: zodResolver(contactUsSchema),
  });

  const onSubmit = (data: ContactUsSchema) => {
    console.log(data);
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div className="form__background"></div>
      <div className="form__wrapper">
        <InputWrapper
          register={register}
          error={errors.name}
          fieldName="name"
          labelText="Ім'я"
          placeholder="Ваше Ім'я"
        />
        <InputWrapper
          register={register}
          error={errors.email}
          fieldName="email"
          labelText="Email"
          placeholder="Ваш Email"
        />
        <TextAreaWrapper
          register={register}
          error={errors.message}
          fieldName="message"
          labelText="Текст повідомлення"
          placeholder="Ваше повідомлення"
        />
      </div>
      <FormButton color="blue">Відправити</FormButton>
    </form>
  );
};

export default Form;
