import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Detail() {
  const [postInfo, setPostInfo] = useState([]);

  const [Flag, setFlag] = useState(false);

  let navigate = useNavigate();
  let params = useParams();

  useEffect(() => {
    axios
      .post("/api/post/detail", params)
      .then((response) => {
        response.data.success
          ? (function () {
              console.log("good");
              setFlag(true);
              setPostInfo(response.data.postInfo);
            })()
          : (function () {
              console.log("bad");
            })();
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const DeleteHandler = () => {
    if (window.confirm("정말로 삭제")) {
      axios.post("/api/post/delete", params).then((response) => {
        if (response.data.success) {
          alert("삭제완료");
          navigate("/postList");
        }
      });
    }
  };

  return (
    <div>
      <h1>Detail</h1>
      {Flag ? (
        <div>
          <h2>title:{postInfo.title}</h2>
          {postInfo.image ? <img src={``} alt="" /> : null}
          <img
            src={postInfo.image}
            alt="image"
            style={{ width: "100%", height: "auto" }}
          />
          <p>content: {postInfo.content}</p>
          <Link to={`/edit/${postInfo.postNum}`}>
            <button>edit</button>
          </Link>

          <button onClick={DeleteHandler}>delete</button>
        </div>
      ) : (
        <div>
          <h2>Loading</h2>
        </div>
      )}
    </div>
  );
}
