import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts";

export const useLogout = () => {
  const navigate = useNavigate();
  const { setIsUserLoggedIn } = useAuth();

  const logout = () => {
    localStorage.removeItem("isUserLoggedIn");
    localStorage.removeItem("uid");
    setIsUserLoggedIn(false);
    navigate("/login");
  };

  return { logout };
};
