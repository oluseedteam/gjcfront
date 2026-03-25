import { values } from "../types";

const patterns = {
  fullName: {
    pattern: /^.{3,20}$/,
    message: "Please provide a valid Full name",
  },
  phone: {
    pattern: /^\d{11}$/,
    message: "Please provide a valid phone number",
  },
  email: {
    pattern: /^\w{3,}[@]\w{1,7}[.]\w{2,}/,
    message: "Please provide a valid Email address",
  },
  password: {
    pattern: /^(?=.*[a-zA-Z0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
    message:
      "Password should contain special characters and alphanumeric characters and must no be less than 8",
  },
};

export const validateComponent = (data: values) => {
  let err: values = {};

  const emptyField = Object.keys(data)
    .map((key) => ({ key: key, value: data[key] }))
    .find((data) => data.value.trim() == "");

  if (emptyField) {
    err[emptyField.key] = `${emptyField.key} can  not be empty`;
  }
  if (data.fullName && !patterns.fullName.pattern.test(data.fullName)) {
    err.fullName = patterns.fullName.message;
  }
  if (data.phone && !patterns.phone.pattern.test(data.phone)) {
    err.phone = patterns.phone.message;
  }
  if (data.email && !patterns.email.pattern.test(data.email)) {
    err.email = patterns.email.message;
  }
  if (data.password && !patterns.password.pattern.test(data.password)) {
    err.password = patterns.password.message;
  }
  console.log({ err, data });

  return err;
};
