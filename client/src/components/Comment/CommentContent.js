import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import useInput from "../../hooks/useInput";
import axios from "axios";

const CommentContent = (props) => {
  const [editText, setEditText] = useState(props.comment);
  const user = useSelector((state) => state.user);
  const ref = useRef();
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalFlag, setModalFlag] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const onChangeEdit = (e) => {
    setEditText(e.target.value);
  };

  const onCancel = (e) => {
    setEditText(props.comment);
    setIsEdit(false);
  };

  const onSubmitComment = (e) => {
    e.preventDefault();
    window.location.reload();
  };

  useOnClickOutside(ref, () => setModalFlag(false));
  return (
    <div>
      <div>{props.author.displayName}</div>
      {/* // 댓글쓴 사람과 로그인한 사람이 같을 경우  */}
      {props.author.uid === user.uid && (
        <div>
          <span onClick={() => setModalFlag(true)}>...</span>
          {modalFlag && (
            <div ref={ref}>
              <div>delete</div>
              <div
                onClick={() => {
                  setIsEdit(true);
                }}
              >
                edit
              </div>
            </div>
          )}
        </div>
      )}

      {isEdit ? (
        <div>
          <form onSubmit={onSubmitComment}>
            <label htmlFor="comments">EDIT</label>
            <textarea id="comments" value={editText} onChange={onChangeEdit} />
            <button type="submit">edit</button>
            <button type="button" onClick={onCancel}>
              cancel
            </button>
          </form>
        </div>
      ) : (
        <div>{props.comment}</div>
      )}
    </div>
  );
};

// Hook
function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

export default CommentContent;
