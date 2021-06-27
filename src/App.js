import { Login, Register, Home,Archive,Trash, PrivateRoute, PageNotFound } from "./Pages";
import { NavBar,SideNav } from "./Components";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import {useAuth} from './contexts'

const App = () => {
 
const {isUserLoggedIn} = useAuth()

//  useEffect(()=>{
//   setIsUserLoggedIn(localStorage.getItem("isUserLoggedIn"))
//  },[])
  return (
    <div className="App">
      {isUserLoggedIn  && <><NavBar /><SideNav /></>}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/home" element={<Home />} /> */}
        <PrivateRoute path="/" element={<Home />} />
        <PrivateRoute path="/archive" element={<Archive />} />
        <PrivateRoute path="/trash" element={<Trash/>} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default App;
