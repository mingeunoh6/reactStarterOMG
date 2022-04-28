import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  createRef,
} from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrnetGrid, emptyCurrnetGrid } from "../reducer/testerSlice";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const GridBoard = ({ column, row, columnGap, rowGap }) => {
  const selectedCell = useRef(null);

  const dispatch = useDispatch();
  const activeCell = useSelector((state) => state.test);
  const cssGridLayoutWrapper = useRef(null);
  const [columnGrid, setColumGrid] = useState([]);
  const [currentCell, setCurrentCell] = useState({});

  useEffect(() => {
    console.log("컴포넌트가 화면에 나타남");

    return () => {
      console.log("컴포넌트가 화면에서 사라짐");
    };
  }, [column, row, columnGap, rowGap]);

  //Catch current Grid Cell
  const onPointCellCheck = (e) => {
    dispatch(setCurrnetGrid(e.target.id));
  };

  //Create Grid Cell
  const createCell = useCallback(() => {
    let newGridCellList = [];
    let newCellItem;

    for (let i = 1; i < parseInt(column) + 1; i++) {
      for (let j = 1; j < parseInt(row) + 1; j++) {
        newCellItem = (
          <CssBoardGridCell
            rowNumb={j}
            colNumb={i}
            key={`${i}${j}`}
            id={`gridCell-${i}${j}`}
            onClick={onPointCellCheck}
          />
        );
        newGridCellList.push(newCellItem);
      }
    }
    return newGridCellList.map((cell) => cell);
  }, [column, row, columnGap, rowGap]);

  //grid-area: grid-row-start , grid-column-start,grid-row-end , grid-column-end
  //if row==3 => grid-row => 1,2,3
  //each-cell -> grid area => row i, column j, auto, auto

  const CssBoardGrid = styled.div`
    display: grid;
    border: 1px solid red;
    height: 100%;
    width: 100%;
    grid-template-columns: ${(props) => `repeat(${props.columns}, 1fr)`};
    grid-template-rows: ${(props) => `repeat(${props.rows}, 1fr)`};
    column-gap: ${(props) => ` ${props.columnGap}px`};
    row-gap: ${(props) => `${props.rowGap}px`};
  `;

  const CssBoardGridCell = styled.div`
    grid-area: ${(props) => `${props.rowNumb}/${props.colNumb}/auto/auto`};
    height: 100%;
    width: 100%;
    border: 1px solid white;
  `;

  return (
    <>
      <CssBoardGrid
        columns={column}
        rows={row}
        columnGap={columnGap}
        rowGap={rowGap}
        ref={cssGridLayoutWrapper}
      >
        {column && row && columnGap && rowGap ? createCell() : null}
      </CssBoardGrid>
    </>
  );
};

export default GridBoard;
