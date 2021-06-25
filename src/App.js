import { Login, Register, Home,Archive, PrivateRoute, PageNotFound } from "./Pages";
import { NavBar,SideNav } from "./Components";
import "./App.css";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
        <NavBar />
      <SideNav />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/home" element={<Home />} /> */}
        <PrivateRoute path="/home" element={<Home />} />
        <PrivateRoute path="/archive" element={<Archive />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default App;
