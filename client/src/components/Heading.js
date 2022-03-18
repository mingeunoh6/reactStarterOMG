import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import firebase from "../firebase.js";

const Heading = () => {
  const user = useSelector((state) => state.user);
  let navigate = useNavigate();
  const logoutHandler = () => {
    firebase.auth().signOut();
    navigate("/");
  };

  return (
    <div>
      <h1>OMG TEST</h1>
      <div>
        <Link to="/">Home </Link>
        <Link to="/postTest">Post </Link>
        <Link to="/PostList">List </Link>

        <Link to="/Register">Register </Link>
        <Link to="/Builder">Builder </Link>
      </div>
      <div>
        {user.accessToken ? (
          <p onClick={logoutHandler}>Logout</p>
        ) : (
          <Link to="/login">Login </Link>
        )}
      </div>
    </div>
  );
};

export default Heading;
