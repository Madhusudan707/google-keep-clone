import { Navigate, Route } from "react-router-dom";
import {useAuth} from "../../contexts"

export const PrivateRoute = ({path,...props}) => {
  // const isUserLoggedIn = localStorage.getItem("isUserLoggedIn");
  // const isUserID = localStorage.getItem("uid")
  const {isUserLoggedIn} = useAuth()
  console.log("private route")
  // if (isUserLoggedIn) {
  //   console.log("private route if")
  //   return <Route {...props} path={path} />;
  // }
  console.log(path)

  return isUserLoggedIn ? (
    <Route {...props} path={path} />
  ) : (
   
    <Navigate state={{ from: path }} replace to="/login" />
    
  );


  // return <Navigate to="/" />;
  // return  <Navigate state={{ from: path }} replace to="/" />
};
