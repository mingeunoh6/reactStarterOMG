import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const CommentList = (props) => {
  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    let isApiSubscribed = true;

    let body = {
      postId: props.postId,
    };
    axios.post("/api/comment/getComment", body).then((response) => {
      if (response.data.success) {
        setCommentList([...response.data.commentList]);
      }
    });

    return () => {
      // cancel the subscription
      isApiSubscribed = false;
    };
  }, []);

  return (
    <div>
      {commentList.map((comment, idx) => {
        return <div key={idx}>{comment.comment}</div>;
      })}
    </div>
  );
};

export default CommentList;
