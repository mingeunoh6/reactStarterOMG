/** @jsxImportSource @emotion/react */

import React, { useEffect } from "react";
import styled from "@emotion/styled";
import { css, jsx, ClassName } from "@emotion/react";

import PropTypes from "prop-types";
import { Children } from "react";

const Wrapper = styled.div`
  background-color: aliceblue;
  height: 1200px;
  display: flex;
  justify-content: space-between;
  & > div {
    border: 1px solid black;
    min-height: 100%;
  }
`;

const LeftPanel = styled.div`
  width: 300px;
`;

const RightPanel = styled.div`
  width: 300px;
  padding: 5px;
`;

const CenterArea = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  flex-grow: 1;
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
  background-color: green;
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
