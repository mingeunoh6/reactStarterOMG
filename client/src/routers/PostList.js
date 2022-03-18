import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .post("/api/post/list")
      .then((response) => {
        setPosts([...response.data.postList]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      <div>
        {posts.map((postItem, id) => {
          console.log(postItem);
          return (
            <div key={id}>
              <Link to={`/post/${postItem.postNum}`}>
                <h1>{postItem.title}</h1>
                <p>{postItem.author.displayName}</p>
                <p>{postItem.content}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PostList;
