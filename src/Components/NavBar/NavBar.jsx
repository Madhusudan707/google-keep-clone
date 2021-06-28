import { Search } from "../";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts";

export const NavBar = () => {
  const { setIsUserLoggedIn } = useAuth();
  const logout = () => {
    localStorage.removeItem("isUserLoggedIn");
    localStorage.removeItem("uid");
    setIsUserLoggedIn(false);
  };
  return (
    <div className="navbar fixed w-full z-20 border-b top-0 ">
      <div className="flex bg-white text-black px-4 h-16 w-full border ">
        <h1 className="text-3xl w-1/3 flex items-center">Nano Notes</h1>
        <ul className="flex justify-between items-center  w-1/3">
          <li>
            <Link to="/">
              <span className="text-2xl ">Notes</span>
            </Link>
          </li>

          <li>
            <Link to="/archive">
              <span className="text-2xl ">Archive</span>
            </Link>
          </li>
          <li>
            <Link to="/trash">
              <span className=" text-2xl">Bin</span>
            </Link>
          </li>
        </ul>
        <Search />
        <ul className="flex justify-around items-center w-96 ml-16">
          <li>
            <i className="fas fa-user-circle fa-2x"></i>
          </li>
          <li>
            <Link to="/" onClick={logout}>
              <i className="fas fa-sign-out-alt fa-2x"></i>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
