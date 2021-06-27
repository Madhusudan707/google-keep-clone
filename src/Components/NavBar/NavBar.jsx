import { Search } from "../";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts";

export const NavBar = () => {
  const {setIsUserLoggedIn} = useAuth()
  const logout=()=>{
    localStorage.removeItem("isUserLoggedIn")
    localStorage.removeItem("uid")
    setIsUserLoggedIn(false)
    
  }
  return (
    <div className="navbar fixed w-full z-20 border-b top-0 ">
      <div className="flex bg-white text-black px-4 h-16">
        <ul className="flex justify-center items-center ">
          {/* <li>
            <i className="fas fa-bars text-2xl mr-6 ml-4"></i>
          </li> */}
          <li>
            <a className="flex items-center">
              <img
                src="/images/keep.png"
                className="w-10 h-10 mr-1"
                alt="logo"
              />
              <span>Keep</span>
            </a>
          </li>
        </ul>
        <Search />
        <ul className="flex justify-around items-center w-96 ml-16">
          <li>
            <i className="fas fa-redo"></i>
          </li>
          <li>
            <i className="fas fa-list-ul"></i>
          </li>
          <li>
            <i className="fas fa-cog "></i>
          </li>
          <li>
            <i className="fas fa-th"></i>
          </li>
          <li>
            <i className="fas fa-user-circle fa-2x"></i>
          </li>
          <li>
          <Link to="/" onClick={logout}><i className="fas fa-sign-out-alt fa-2x"></i></Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
