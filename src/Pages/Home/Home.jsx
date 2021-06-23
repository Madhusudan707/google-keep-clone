import { NavBar, SideNav, Body } from "../../Components";
import { useLogout } from "../../hooks";

export const Home = () => {
  const { logout } = useLogout();

  return (
    <div className="home">
      <NavBar />
      <SideNav />
      <Body />
    </div>
  );
};
