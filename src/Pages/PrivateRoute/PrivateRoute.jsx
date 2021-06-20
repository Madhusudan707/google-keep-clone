import { Navigate, Route } from "react-router-dom";

export const PrivateRoute = (props) => {
  const isUserLoggedIn = localStorage.getItem("isUserLoggedIn");

  if (isUserLoggedIn) {
    return <Route {...props} />;
  }

  return <Navigate to="/" />;
};
