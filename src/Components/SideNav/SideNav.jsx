import { useState } from "react";
import style from "./sidenav.module.css";
export const SideNav = () => {
  const [active, setActive] = useState(false);

  const test = () => {
    setActive(!active);
  };
  return (
    <div className={style.sidenav}>
      <ul className="flex flex-col h-screen bg-black text-gray-300 text-2xl p-4">
        <li onClick={test} className={style[`${active ? "active" : ""}`]}>
          <i className="far fa-lightbulb p-4  fixed "></i>
          <span className="ml-16">Notes</span>
        </li>
        <li onClick={test} className={style[`${active ? "active" : ""}`]}>
          <i className="far fa-bell p-4 fixed"></i>
          <span className="ml-16">Reminders</span>
        </li>
        <li onClick={test} className={style[`${active ? "active" : ""}`]}>
          <i className="fas fa-pen p-4 fixed"></i>
          <span className="ml-16">Edit labels</span>
        </li>
        <li onClick={test} className={style[`${active ? "active" : ""}`]}>
          <i className="fas fa-archive p-4 fixed"></i>
          <span className="ml-16">Archive</span>
        </li>
        <li onClick={test} className={style[`${active ? "active" : ""}`]}>
          <i className="far fa-trash-alt p-4 fixed"></i>
          <span className="ml-16">Bin</span>
        </li>
      </ul>
    </div>
  );
};
