import { Login, Register, Home, PrivateRoute, PageNotFound } from "./Pages";
import "./App.css";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/home" element={<Home />} /> */}
        <PrivateRoute path="/home" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default App;
