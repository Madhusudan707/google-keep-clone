import { useEffect, useState } from "react";
import firebase from "firebase/app";

export const useRegister = (validate) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    cpassword: "",
  });

  const [firebaseServerError, setFirebaseServerError] = useState("");

  useEffect(() => {
    setErrors(validate(values));
  }, [values]);

  const handleChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  const registerUser = async () => {
    try {
      const user = await firebase
        .auth()
        .createUserWithEmailAndPassword(values.email, values.password);
    } catch (error) {
      setFirebaseServerError(error.message);
    }
  };

  return { values, errors, firebaseServerError, handleChange, registerUser };
};
