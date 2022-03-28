import React from "react";
import styled from "@emotion/styled";

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
`;

const CenterArea = styled.div`
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

const GridLayout = () => {
  return (
    <Wrapper>
      <LeftPanel>왼쪽</LeftPanel>
      <CenterArea></CenterArea>

      <RightPanel>
        <PanelItem>
          <h2>BORDER</h2>
          <div className="item-1">
            <Input>
              <label for="ColumnInput">가로단</label>
              <input id="ColumnInput" type="number"></input>
            </Input>
            <Input>
              <label for="RowInput">세로단</label>
              <input id="RowInput" type="number"></input>
            </Input>
            <Input>
              <label for="ColumnGap">가로간격</label>
              <input id="ColumnGap" type="number"></input>
            </Input>
            <Input>
              <label for="RowGap">세로간격</label>
              <input id="RowGap" type="number"></input>
            </Input>
          </div>
        </PanelItem>
        <hr />
        <PanelItem>
          <h2>CONTENTS</h2>
        </PanelItem>
      </RightPanel>
    </Wrapper>
  );
};

export default GridLayout;
