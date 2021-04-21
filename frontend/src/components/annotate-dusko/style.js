import styled from "styled-components";
import { TransparentButton } from "../../globalstyles/globalStyle";

export const ToolsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 6%;
  margin-left: 500px;
  margin-bottom: 3px;
`;

export const Tool = styled(TransparentButton)`
  // color: ${(props) => props.theme.transbuttoncolor};
  color: white;
`;

export const StyledCanvas = styled.canvas`
  /* border: 2px solid red; */
  background-color: white;
  overflow: hidden;
  box-shadow: 4px 4px 16px 0px rgba(182, 163, 163, 0.75);
  -webkit-box-shadow: 4px 4px 16px 0px rgba(182, 163, 163, 0.75);
  -moz-box-shadow: 4px 4px 16px 0px rgba(182, 163, 163, 0.75);
`;

export const References = styled.div`
  flex-direction: column;
  width: 100px;
  height: 30vh;
  box-shadow: 4px 4px 16px 0px rgba(182, 163, 163, 0.75);
  -webkit-box-shadow: 4px 4px 16px 0px rgba(182, 163, 163, 0.75);
  -moz-box-shadow: 4px 4px 16px 0px rgba(182, 163, 163, 0.75);
  /* overflow-x: hidden;
  overflow-y: scroll;  */

  /* height: 75vh; */
  overflow: scroll;
  overflow-x: hidden;
  /* width: 75vw; */

  ::-webkit-scrollbar {
    width: 5px;
    background-color: ${(props) => props.theme.bgcolor};
  }

  ::-webkit-scrollbar-track {
    /* -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.1); */
    background-color: #e0e0e0;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(#30adea, #216273);
    border: none;
    border-radius: 10px;
  }
`;

export const CanvasContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const SampleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  height: 50%;
  width: 20%;
  margin-top: 4rem;
`;
