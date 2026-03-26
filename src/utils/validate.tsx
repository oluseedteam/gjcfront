import { values } from "../types";

const patterns = {
  fullName: {
    pattern: /^.{3,20}$/,
    message: "Please provide a valid Full name",
  },
};

export const validateComponent = (data: values) => {
  let err: values = {};
  if (data.fullName && !patterns.fullName.pattern.test(data.fullName)) {
    err.firstName = patterns.fullName.message;
  }
  console.log({ err, data });

  return err;
};
