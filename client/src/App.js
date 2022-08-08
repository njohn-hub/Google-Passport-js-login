import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar.jsx";
import "./app.css";
import Home from "./Pages/Home.jsx";
import Post from "./Pages/Post.jsx";
import Login from "./Pages/Login.jsx";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {

      fetch("http://localhost:5000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      }).then((Response) => {
        if (Response.status === 200) return Response.json();
        throw new Error("authentication has failed");
      }).then(resObject => {
        setUser(resObject.user)
      }).catch(err => {
        console.log(err)
      })
    };
    getUser();
  },[]);


  return (
    <BrowserRouter>
      <div>
        <Navbar user={user} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route path="/post/:id" element={user ? <Post /> : <Navigate to="/login"/> } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
