import React from 'react';
import { Link } from "react-router-dom";
const Heading = () => {
    return (
        <div>
            <h1>OMG TEST</h1>
            <Link to="/">Home </Link>
            <Link to="/postTest">Post </Link>
            <Link to="/PostList">List </Link>
            <Link to="/login">Login </Link>
            <Link to="/Register">Register </Link>

        </div>
    );
};

export default Heading;