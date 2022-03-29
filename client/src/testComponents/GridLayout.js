/** @jsxImportSource @emotion/react */
import React from "react";

import { css, jsx, ClassName } from "@emotion/react";
import useInput from "../hooks/useInput";
import {
  Wrapper,
  LeftPanel,
  RightPanel,
  CenterArea,
  PanelItem,
  InputArea,
  Layout,
} from "./GridLayoutStyle";

import GridBoard from "./GridBoard";

const GridLayout = () => {
  const [columnInput, onChangeColumnInput, resetColumnInput] = useInput("2");
  const [rowInput, onChangeRowInput, resetRowInput] = useInput("2");
  const [columnGap, onChangeColumnGap, resetColumnGap] = useInput("5");
  const [rowGap, onChangeRowGap, resetRowGap] = useInput("5");

  return (
    <>
      <Wrapper>
        <LeftPanel>왼쪽</LeftPanel>
        <CenterArea>
          <Layout>
            <GridBoard column={columnInput} row={rowInput} />
          </Layout>
        </CenterArea>

        <RightPanel>
          <h1>BOARD</h1>

          <PanelItem>
            <h2>BORDER-1</h2>
            <div className="item-1">
              <InputArea
                title="가로단"
                id="columnInput"
                type="number"
                value={columnInput}
                onChange={onChangeColumnInput}
              />
              <InputArea
                title="세로단"
                id="rowInput"
                type="number"
                value={rowInput}
                onChange={onChangeRowInput}
              />

              <InputArea
                title="가로간격"
                id="ColumnGap"
                type="number"
                value={columnGap}
                onChange={onChangeColumnGap}
              />
              <InputArea
                title="세로간격"
                id="RowGap"
                type="number"
                value={rowGap}
                onChange={onChangeRowGap}
              />
            </div>
          </PanelItem>
          <hr />
          <PanelItem>
            <h2>CONTENTS</h2>
          </PanelItem>
        </RightPanel>
      </Wrapper>
    </>
  );
};

export default GridLayout;
