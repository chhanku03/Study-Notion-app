import "./App.css";
import { Route,Routes } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
function App() {
  return(
    <div>
      <NavBar></NavBar>
       <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/signup" element={<SignUp/>} ></Route>
          <Route path="/dashboard" element={<Dashboard/>}></Route>
       </Routes>
    </div>
  )
}

export default App;
