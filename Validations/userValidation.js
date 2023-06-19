const yup = require("yup");

const userSchema = yup.object({
  first_name: yup
    .string()
    .required("plz input the value")
    .typeError("this is NaN"),
  last_name: yup
    .string()
    .required("plz input the value")
    .typeError("this is NaN"),
  email: yup
    .string()
    .required("plz input the value")
    .typeError("this is NaN")
    .email(),
});
module.exports = userSchema;
