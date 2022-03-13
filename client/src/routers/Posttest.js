import React from "react";
import { useState } from "react";
import { Form } from "../style/Poststyle";
import { useNavigate } from "react-router-dom";
import ImageUpload from "../components/Post/ImageUpload";

import axios from "axios";

const Posttest = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState();

  let navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();

    if (title === "" || content === "") {
      return alert("empty!");
    }

    let body = {
      title: title,
      content: content,
      image: image,
    };

    axios
      .post("api/post/submit", body)
      .then((response) => {
        if (response.data.success) {
          alert("글 작성이 완료");
          navigate("/");
        } else {
          alert("글 작성에 실패하였습니다");
        }
      })
      .catch((err) => console.log(err));

    setTitle("");
    setContent("");
  };

  const titleChange = (e) => {
    setTitle(e.target.value);
  };

  const contentChange = (e) => {
    setContent(e.target.value);
  };

  return (
    <div>
      <h2>Post</h2>
      <div>
        <Form onSubmit={onSubmit}>
          <label htmlFor="title">Title</label>
          <input id="title" value={title} onChange={titleChange} />

          <ImageUpload setImage={setImage} />

          <label htmlFor="Content">Content</label>
          <textarea id="Content" value={content} onChange={contentChange} />
          <button>Submit</button>
        </Form>
      </div>
    </div>
  );
};

export default Posttest;
