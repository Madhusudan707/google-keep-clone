import { Search,UserProfile } from "../";
import { Link } from "react-router-dom";
import { useLogout } from "../../hooks";
import './navbar.css'

export const NavBar = () => {
  
  const { logout } = useLogout();
  return (
    <div className="navbar fixed w-full z-20 border-b top-0 ">
      <div className="flex bg-white text-black lg:px-4 h-16 w-full border ">
        <h1 className="lg:text-3xl text-2xl  lg:w-1/3 w-full pl-2 flex items-center text-logox">Nano Notes</h1>
       {/* <img src='icon-192x192.png' className='lg:w-24 lg:h-24 w-16 h-16 lg:hidden' alt='logo'/> */}
        <ul className="flex lg:justify-between items-center  lg:w-1/3 lg:text-2xl text-1xl">
          <li className="hover:text-red-500">
            <Link to="/">
              <span className='lg:p-0 p-2' >Notes</span>
            </Link>
          </li>
          <li className="hover:text-red-500">
            <Link to="/archive">
              <span className='lg:p-0 p-2' >Archive</span>
            </Link>
          </li>
          <li className="hover:text-red-500">
            <Link to="/trash">
              <span  className='lg:p-0 p-2' >Bin</span>
            </Link>
          </li>
        </ul>
        <Search />
        <ul className="flex justify-around items-center lg:w-96 w-full lg:ml-16 ml-4">
          <li>
           <a href="#user_profile"> <i className="fas fa-user-circle lg:fa-2x fa-2x"></i></a>
          </li>
          <li>
            <Link to="/" onClick={logout}>
              <i className="fas fa-sign-out-alt  lg:fa-2x fa-2x"></i>
            </Link>
          </li>
        </ul>
      </div>
      <UserProfile/>
    </div>
  );
};
