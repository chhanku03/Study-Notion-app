import "./App.css";
import { Route,Routes } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import { useState } from "react";
function App() {
   const[isLogedIn,setIsLogedIn]=useState(false);
  return(
    <div>
      <NavBar isLogedIn={isLogedIn} setIsLogedIn={setIsLogedIn} ></NavBar>
       <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/login" element={<Login setIsLogedIn={setIsLogedIn} />}></Route>
          <Route path="/signup" element={<SignUp setIsLogedIn={setIsLogedIn}/>} ></Route>
          <Route path="/dashboard" element={<Dashboard/>}></Route>
       </Routes>
    </div>
  )
}

export default App;
