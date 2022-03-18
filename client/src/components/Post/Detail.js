import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";




function Detail() {
  const [postInfos, setPostInfos] = useState({});
  const user = useSelector((state) => state.user)
  const [Flag, setFlag] = useState(false);

  let navigate = useNavigate();
  let params = useParams();

  useEffect(() => {
    let body = {
      postNum: params.postNum,
    }

    axios.post('/api/post/detail', body).then((response) => {
      if (response.data.success) {
        setPostInfos(response.data.postInfo);
        setFlag(true)
      }

    }).catch((err) => {
      console.log(err);
    })



  }, [])

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
          <h2>title:{postInfos.title}</h2>
          {/* /문제가 시작된 부분 */}
          <h3>writer:{postInfos.author.displayName}</h3>

          {postInfos.image ? (
            <img
              src={postInfos.image}
              alt="postedImage"
              style={{ width: "100%", height: "auto" }}
            />) : null}

          <p>content: {postInfos.content}</p>



          {user.uid === postInfos.author.uid && (

            <div>
              <Link to={`/edit/${postInfos.postNum}`}>
                <button>edit</button>
              </Link>

              <button onClick={DeleteHandler}>delete</button>
            </div>

          )}


        </div>
      ) : (
        <div>
          <h2>Loading</h2>
        </div>
      )}
    </div>
  );
}


export default Detail;