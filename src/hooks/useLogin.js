import { useState } from "react";
import firebase from "firebase/app";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts";

export const useLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [firebaseServerError, setFirebaseServerError] = useState("");
  const { setUser, setIsLoading, setIsUserLoggedIn, isLoading } = useAuth();

  const loginUser = async () => {
    if (!email) {
      setErrorMsg("Enter Your Username to login");
    } else if (!password) {
      setErrorMsg("Enter Your Password to login");
    } else {
      try {
        setIsLoading(true);
        const response = await firebase
          .auth()
          .signInWithEmailAndPassword(email, password);
        if (response) {
          setUser(response);
          setIsLoading(false);
          setIsUserLoggedIn(true);
          localStorage.setItem("isUserLoggedIn", true);
          localStorage.setItem("uid",response.user.uid)
          navigate("/home");
        }
        console.log(response);
        console.log(response.user.uid);
      } catch (error) {
        setIsLoading(false);
        setFirebaseServerError(error.message);
      }
    }
  };

  return {
    loginUser,
    setEmail,
    setPassword,
    errorMsg,
    firebaseServerError,
    isLoading,
  };
};
