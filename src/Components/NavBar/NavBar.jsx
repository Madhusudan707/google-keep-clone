import { Search } from "../";

export const NavBar = () => {
  return (
    <div className="navbar fixed w-full  ">
      <div className="flex bg-black text-white px-4 h-16">
        <ul className="flex justify-center items-center ">
          <li>
            <i className="fas fa-bars text-2xl mr-6 ml-4"></i>
          </li>
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
        </ul>
      </div>
    </div>
  );
};
