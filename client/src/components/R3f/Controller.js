import React, { useCallback, useState, useEffect, useRef } from "react";

import styled from "@emotion/styled";

const ControllerWrapper = styled.div`
  position: absolute;
  z-index: 999;
  bottom: 10px;
  right: 10px;
  width: 300px;
  height: 300px;
  border: 1px solid red;
  color: white;
  & .controlKey {
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 100px;
    height: 100px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid yellow;
    &:hover {
      cursor: pointer;
      background-color: green;
    }
    p {
      margin: 0;
      vertical-align: center;
      text-align: center;
      pointer-events: none;
    }
  }
  .goFoward {
    top: 0;
    right: 50%;
    transform: translateX(50%);
  }

  .goBackward {
    bottom: 0;
    right: 50%;
    transform: translateX(50%);
  }
  .goLeft {
    bottom: 50%;
    left: 0%;
    transform: translateY(50%);
  }
  .goRight {
    bottom: 50%;
    right: 0%;
    transform: translateY(50%);
  }
`;

const Controller = () => {
  const [counter, setCounter] = useState(0);
  const [keyActive, setKeyActive] = useState(false)
  const intervalRef = useRef(null);


  useEffect(() => {
    window.addEventListener("keydown", onControllerDown);
    window.addEventListener("keyup", keyUp);

    onControllerUp();
    return () => {
      //cleanup
      window.removeEventListener("keydown", onControllerDown);
      window.addEventListener("keyup", keyUp);
    }
  }, []);



  const keyDown = (e) => {
    console.log(e.key)
    setKeyActive(true)

  }

  const keyUp = (e) => {
    setKeyActive(false)
  }

  const [forward, setForward] = useState(0);
  const [backward, setBackward] = useState(0);
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);


  const onControllerDown = (e) => {

    if (intervalRef.current) {
      return;
    }
    intervalRef.current = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);

      switch (e.type) {
        case "mousedown":
          console.log('mouse')
          if (e.button == 0 && e.target.id == "goFoward") {
            setForward((prevForward) => prevForward + 1);
          } else if (e.button == 0 && e.target.id == "goBackward") {
            setBackward((prevBackward) => prevBackward + 1);
          } else if (e.button == 0 && e.target.id == "goLeft") {
            setLeft((prevLeft) => prevLeft + 1);
          } else if (e.button == 0 && e.target.id == "goRight") {
            setRight((prevRight) => prevRight + 1);
          }
          break;
        case "touchstart":
          console.log('touch')
          if (e.button == 0 && e.target.id == "goFoward") {
            setForward((prevForward) => prevForward + 1);
          } else if (e.button == 0 && e.target.id == "goBackward") {
            setBackward((prevBackward) => prevBackward + 1);
          } else if (e.button == 0 && e.target.id == "goLeft") {
            setLeft((prevLeft) => prevLeft + 1);
          } else if (e.button == 0 && e.target.id == "goRight") {
            setRight((prevRight) => prevRight + 1);
          }
          break;

        case "keydown":
          setKeyActive(true)
          if (e.key === "w") {
            setForward((prevForward) => prevForward + 1);
          } else if (e.key === "s") {
            setBackward((prevBackward) => prevBackward + 1);
          } else if (e.key === "a") {
            setLeft((prevLeft) => prevLeft + 1);
          } else if (e.key === "d") {
            setRight((prevRight) => prevRight + 1);
          }
          break
        default:
          break
      }
    }, 10);
    console.log(forward, backward, left, right);
    console.log(intervalRef);
  };

  const onControllerUp = (e) => {


    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      setForward(0);
      setBackward(0);
      setLeft(0);
      setRight(0);
      intervalRef.current = null;
    }
    console.log(intervalRef);
    console.log(counter);
  };

  return (
    <div>
      <ControllerWrapper>
        <div
          id="goFoward"
          className="controlKey goFoward"
          onMouseDown={onControllerDown}
          onMouseUp={onControllerUp}
          onMouseLeave={onControllerUp}
          onTouchStart={onControllerDown}
          onTouchEnd={onControllerUp}
        >
          <p>FORWARD</p>
        </div>
        <div
          id="goBackward"
          className="controlKey goBackward"
          onMouseDown={onControllerDown}
          onMouseUp={onControllerUp}
          onMouseLeave={onControllerUp}
          onTouchStart={onControllerDown}
          onTouchEnd={onControllerUp}
        >
          <p>BACKWARD</p>
        </div>
        <div
          id="goLeft"
          className="controlKey goLeft"
          onMouseDown={onControllerDown}
          onMouseUp={onControllerUp}
          onMouseLeave={onControllerUp}
          onTouchStart={onControllerDown}
          onTouchEnd={onControllerUp}
        >
          <p>LEFT</p>
        </div>
        <div
          id="goRight"
          className="controlKey goRight"
          onMouseDown={onControllerDown}
          onMouseUp={onControllerUp}
          onMouseLeave={onControllerUp}
          onTouchStart={onControllerDown}
          onTouchEnd={onControllerUp}
        >
          <p>RIGHT</p>
        </div>
      </ControllerWrapper>
    </div>
  );
};

export default Controller;
