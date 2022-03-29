import React, { useState, useEffect, useCallback } from "react";
import styled from "@emotion/styled";
import { css, jsx, ClassName } from "@emotion/react";
import PropTypes from "prop-types";

const GridBoard = ({ column, row }) => {
  const [columnGrid, setColumGrid] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    setColumGrid([]);
    const girdItem = {
      column,
      row,
    };
    for (let i = 0; i < column; i++) {
      girdItem.column = i;
      for (let j = 0; j < row; j++) {
        girdItem.row = j;
        console.log(girdItem);
        setColumGrid([columnGrid, girdItem]);
      }
    }
    return function cleanup() {
      console.log("I am in cleanup function");
      abortController.abort();
    };
  }, [column, row]);

  console.log("ss", columnGrid);

  const boardCSS = css`
    display: grid;
    padding: 5px;
    background-color: yellow;
    height: 100%;
    width: 100%;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    gap: 5px;
    & > div {
      border: 1px solid black;
    }
  `;
  return (
    <>
      <div css={boardCSS}></div>
    </>
  );
};

export default GridBoard;
