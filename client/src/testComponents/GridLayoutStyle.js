/** @jsxImportSource @emotion/react */

import React, { useEffect } from "react";
import styled from "@emotion/styled";
import { css, jsx, ClassName } from "@emotion/react";

import PropTypes from "prop-types";
import { Children } from "react";

const Wrapper = styled.div`
  font-size: 15px;
  background-color: aliceblue;
  height: 1200px;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-between;
  & > div {
    border: 1px solid black;
    min-height: 100%;
  }
  h1 {
    font-size: 2.3rem;
  }
  h2 {
    font-size: 2rem;
  }
  h3 {
    font-size: 1.2rem;
  }
  p {
    font-size: 1rem;
  }
`;

const LeftPanel = styled.div`
  width: 300px;
  background-color: yellow;
  & .Lp-Wrapper {
    background-color: red;
    border: 1px solid black;

    padding: 10px;
  }
  & .Lp-section {
    padding: 2px;
    width: 100%;
    background-color: chocolate;
  }
  & .Lp-ItemBox {
    padding: 5px;
    border: 1px solid black;
    & .List-Itme {
      display: flex;
      justify-content: space-between;
      border: 1px solid black;
    }
    & .List-Item-icon-group {
      display: flex;
      border: 1px solid black;
      justify-content: flex-end;
      & > div {
        margin-left: 5px;
      }
    }
  }
`;

const RightPanel = styled.div`
  width: 300px;
  padding: 5px;
`;

const CenterArea = styled.div`
  position: relative;
  flex-grow: 1;
  height: 100%;
  text-align: center;
`;

const PanelItem = styled.div`
  padding: 10px;

  & h2 {
    margin-bottom: 10px;
  }
`;

const Input = styled.div`
  border: 1px solid black;
  padding: 2px;
  display: flex;
  justify-content: space-between;
  & {
    input,
    label {
      width: 50%;
      margin: 4px;
    }
  }
`;
const Layout = styled.div`
  position: absolute;
  transform: translate3d(-50%, -50%, 0);
  left: 50%;
  top: 50%;
  width: 50%;
  height: 80%;
  background-color: blue;
`;

const InputArea = ({ title, id, type, value, onChange }) => {
  return (
    <>
      <Input>
        <label htmlFor={id}>{title}</label>
        <input id={id} type={type} value={value} onChange={onChange}></input>
      </Input>
    </>
  );
};

InputArea.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
};

export {
  Wrapper,
  LeftPanel,
  RightPanel,
  CenterArea,
  PanelItem,
  Input,
  InputArea,
  Layout,
};
