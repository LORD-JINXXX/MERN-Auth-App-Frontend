import { Routes, Route, Navigate} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import React, { useEffect } from 'react';
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Home from "./pages/Home";


function App() {

  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const token = localStorage.getItem("token");

  useEffect(() => {
    localStorage.setItem('isLoggedIn', isLoggedIn);
    localStorage.setItem('token', token);
  }, [isLoggedIn, token])


  return (
    <div >

      <ToastContainer
        position="top-right"
        autoClose={5000}
      />

      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/home*" exact element={isLoggedIn ? <Home/> : <Navigate to="/login"/>} />
      </Routes>

    </div>
  );
}

export default App;
