import { useState } from "react";
import style from "./sidenav.module.css";
import { Link } from "react-router-dom";
export const SideNav = () => {
  const [active, setActive] = useState(false);

  const test = () => {
    setActive(!active);
  };
  return (
    <div className={`${style.sidenav}`}>
      <ul className="flex flex-col h-screen bg-white text-black text-2xl p-4">
        <li onClick={test} className={style[`${active ? "active" : ""}`]}>
          <Link to="/">
            <i className="far fa-lightbulb p-4 ">
              <span className="ml-10 text-white">Notes</span>
            </i>
          </Link>
        </li>
        <li onClick={test} className={style[`${active ? "active" : ""}`]}>
          <Link to="">
            <i className="far fa-bell  p-4 ">
              <span className="ml-10 text-white">Reminder</span>
            </i>
          </Link>
        </li>
        <li onClick={test} className={style[`${active ? "active" : ""} `]}>
          <Link to="">
            <i className="fas fa-pen  p-4 ">
              <span className="ml-10 text-white">Edit Labels</span>
            </i>
          </Link>
        </li>
        <li onClick={test} className={style[`${active ? "active" : ""}`]}>
          <Link to="/archive">
            <i className="fas fa-archive  p-4 ">
              <span className="ml-10 text-white">Archive</span>
            </i>
          </Link>
        </li>
        <li onClick={test} className={style[`${active ? "active" : ""}`]}>
          <Link to="/trash">
            <i className="far fa-trash-alt  p-4 ">
              <span className="ml-10 text-white">Bin</span>
            </i>
          </Link>
        </li>
      </ul>
    </div>
  );
};
