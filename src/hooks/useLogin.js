import { useState } from "react";
import firebase from "firebase/app";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [firebaseServerError, setFirebaseServerError] = useState("");

  const loginUser = async () => {
    if (!email) {
      setErrorMsg("Enter Your Username to login");
    } else if (!password) {
      setErrorMsg("Enter Your Password to login");
    } else {
      try {
        const user = await firebase
          .auth()
          .signInWithEmailAndPassword(email, password);

        navigate("/home");
      } catch (error) {
        setFirebaseServerError(error.message);
      }
    }
  };

  return { loginUser, setEmail, setPassword, errorMsg, firebaseServerError };
};
