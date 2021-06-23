import { Navigate, Route } from "react-router-dom";

export const PrivateRoute = (props) => {
  const isUserLoggedIn = localStorage.getItem("isUserLoggedIn");
  const isUserID = localStorage.getItem("uid")

  if (isUserLoggedIn && isUserID) {
    return <Route {...props} />;
  }

  return <Navigate to="/" />;
};
