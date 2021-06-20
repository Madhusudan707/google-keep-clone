import { useEffect, useState } from "react";
import firebase from "firebase/app";
import { useNavigate } from "react-router-dom";

export const useRegister = (validate) => {
  const navigate = useNavigate();
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    cpassword: "",
  });

  const [firebaseServerError, setFirebaseServerError] = useState("");

  useEffect(() => {
    setErrors(validate(values));
    // eslint-disable-next-line
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
      navigate("/home");
    } catch (error) {
      setFirebaseServerError(error.message);
    }
  };

  return { values, errors, firebaseServerError, handleChange, registerUser };
};
