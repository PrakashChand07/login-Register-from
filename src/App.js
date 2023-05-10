import HomePage from "./Component/HomePage";
import Register from "./Component/Register";
import Login from "./Component/LoginPage";
import Profile from "./Component/Profile";
import { Route, Routes } from "react-router-dom";
import "./App.css";
function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route exact path="login" element={<Login />}></Route>
        <Route exact path="Register" element={<Register />}></Route>
        <Route exact path="profile" element={<Profile />}></Route>
      </Routes>
    </>
  );
}

export default App;
