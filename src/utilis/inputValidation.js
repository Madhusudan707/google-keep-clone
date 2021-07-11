export const validate = (values) => {
  let errors = { name: "", email: "", password: "", cpassword: "" };
  if (!values.name) {
    errors.name = "Name is required";
  } else if (!/^[a-zA-Z ]{3,30}$/.test(values.name)) {
    errors.name =
      "Name must contain altleast three characters and not any special character.";
  }
  if (!values.email) {
    errors.email = "Email address is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 8) {
    errors.password = "Password must be 8 or more characters";
  }
  if (!values.cpassword) {
    errors.cpassword = "Password is required";
  }
  if (values.password !== values.cpassword) {
    errors.cpassword = "Password and Confirm password must match";
  }
  return errors;
};
