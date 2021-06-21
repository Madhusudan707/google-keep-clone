import { NavBar,SideNav,TakeNote } from "../../Components";
import { useLogout } from "../../hooks";

export const Home = () => {
  const { logout } = useLogout();

  return (
    <div>
      
      <NavBar/>
     
      <SideNav/>
      <TakeNote/>
     
    </div>
  );
};
