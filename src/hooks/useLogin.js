import { useState } from "react";
import firebase from "firebase/app";

export const useLogin = () => {
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
      } catch (error) {
        setFirebaseServerError(error.message);
      }
    }
  };

  return { loginUser, setEmail, setPassword, errorMsg, firebaseServerError };
};
