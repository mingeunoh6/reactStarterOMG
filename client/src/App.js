import React from "react";
import Home from "./routers/Home";

import ThreeStarter from "./routers/THREE";
import Posttest from "./routers/Posttest";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Scrollcalculator from "./routers/Scrollcalculator";
import PostList from "./routers/PostList";
import Detail from "./components/Post/Detail";
import Edit from "./components/Post/Edit";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ThreeStarter />} />
        <Route path="postTest" element={<Posttest />} />
        <Route path="scroll" element={<Scrollcalculator />} />
        <Route path="postList" element={<PostList />} />
        <Route path="/post/:postNum" element={<Detail />} />
        <Route path="/edit/:postNum" element={<Edit />} />
      </Routes>
    </Router>
  );
}

export default App;
