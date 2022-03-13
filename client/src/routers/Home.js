import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h2>this is home</h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/test">A</Link>
        </li>
        <li>
          <Link to="/Posttest">PostTest</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
