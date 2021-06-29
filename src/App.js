import {
  Login,
  Register,
  Home,
  Archive,
  Trash,
  PrivateRoute,
  PageNotFound,
} from "./Pages";
import { NavBar} from "./Components";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useAuth } from "./contexts";

const App = () => {
  const { isUserLoggedIn } = useAuth();
  return (
    <div className="App" id="style-2">
      {isUserLoggedIn && <NavBar />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <PrivateRoute path="/" element={<Home />} />
        <PrivateRoute path="/archive" element={<Archive />} />
        <PrivateRoute path="/trash" element={<Trash />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default App;
