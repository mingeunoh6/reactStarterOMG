import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginUser, logoutUser } from "./reducer/userSlice";
import firebase from "./firebase.js";

import Home from "./routers/Home";
import Heading from "./components/Heading";
import ThreeStarter from "./routers/THREE";
import Posttest from "./routers/Posttest";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Scrollcalculator from "./routers/Scrollcalculator";
import PostList from "./routers/PostList";
import PostArea from "./components/Post/PostArea";
import Edit from "./components/Post/Edit";
import Login from "./components/User/Login";
import Register from "./components/User/Register";
import Builder from "./routers/Builder";

function App() {
  const dispatch = useDispatch();

  //login
  useEffect(() => {
    firebase.auth().onAuthStateChanged((userInfo) => {
      if (userInfo !== null) {
        dispatch(loginUser(userInfo.multiFactor.user));
      } else {
        dispatch(logoutUser());
      }
    });
  }, []);

  // //logout
  // useEffect(() => {
  //   firebase.auth().signOut();
  // }, []);

  return (
    <>
      <Heading />
      <Routes>
        <Route path="/" element={<ThreeStarter />} />
        <Route path="postTest" element={<Posttest />} />
        <Route path="scroll" element={<Scrollcalculator />} />
        <Route path="postList" element={<PostList />} />
        <Route path="/post/:postNum" element={<PostArea />} />
        <Route path="/edit/:postNum" element={<Edit />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/builder" element={<Builder />} />
      </Routes>
    </>
  );
}

export default App;
