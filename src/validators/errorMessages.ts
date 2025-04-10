const errorMessages = {
  email: {
    required: "Поле Email не може бути пустим",
    invalid: "Email повинен бути правильного формату",
  },
  name: {
    required: "Поле Ім'я не може бути пустим",
    min: "Ім'я не може бути менше 2 символів",
    max: "Ім'я не може бути менше 64 символів",
  },
  message: {
    required: "Текст Повідомлення не може бути пустим",
    min: "Повідомлення не може бути менше 2 символів",
    max: "Повідомлення не може бути більше 200 символів",
  },
};

export default errorMessages;
