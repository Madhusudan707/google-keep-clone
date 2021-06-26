import { Navigate, Route } from "react-router-dom";
import {useAuth} from "../../contexts"

export const PrivateRoute = (props) => {
  // const isUserLoggedIn = localStorage.getItem("isUserLoggedIn");
  // const isUserID = localStorage.getItem("uid")
  const {isUserLoggedIn} = useAuth()
  if (isUserLoggedIn) {
    return <Route {...props} />;
  }

  return <Navigate to="/" />;
};
