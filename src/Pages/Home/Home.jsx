import { NavBar } from "../../Components";
import { useLogout } from "../../hooks";

export const Home = () => {
  const { logout } = useLogout();

  return (
    <div>
      <NavBar/>
    </div>
  );
};
