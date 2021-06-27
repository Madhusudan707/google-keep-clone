import { useState,useEffect } from "react";
import firebase from "firebase/app";
import { useNavigate,useLocation } from "react-router-dom";
import { useAuth } from "../contexts";

export const useLogin = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [firebaseServerError, setFirebaseServerError] = useState("");
  const { setUser, setIsLoading, setIsUserLoggedIn, isUserLoggedIn, isLoading } = useAuth();

//    useEffect(()=>{
//     setIsUserLoggedIn(localStorage.getItem("isUserLoggedIn"))
//     if(isUserLoggedIn){
//       navigate("/home");
//       console.log("yes1")
//     }
    
//  },[])

useEffect(()=>{
      setIsUserLoggedIn(localStorage.getItem("isUserLoggedIn"))
      
      if(localStorage.getItem("isUserLoggedIn")){
        navigate(state?.from ? state.from : "/", { replace: true });
        
      }else{
        navigate("/login");
      }
      
   },[])


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
