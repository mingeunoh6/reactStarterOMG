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
              console.log("서버에서 디테일로 응답이 잘 왔음");
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

  console.log("서버에서 온 디테일 포스트 데이터:", postInfo);

  return (
    <div>
      <h1>Detail</h1>
      {Flag ? (
        <div>
          <h2>title:{postInfo.title}</h2>
          {/* /문제가 시작된 부분 */}
          <h3>writer:{postInfo.author.displayName}</h3>

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
