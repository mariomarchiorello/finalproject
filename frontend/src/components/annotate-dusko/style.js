import styled from "styled-components";
import { TransparentButton, BlueButton } from "../../globalstyles/globalStyle";

export const ToolsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
`;

export const Tool = styled(TransparentButton)`
  // color: ${(props) => props.theme.transbuttoncolor};
  color: white;
  height: 30px;
`;

export const StyledCanvas = styled.canvas`
  /* border: 2px solid red; */
  background-color: white;
  overflow: hidden;
  /* box-shadow: 4px 4px 16px 0px rgba(182, 163, 163, 0.75);
  -webkit-box-shadow: 4px 4px 16px 0px rgba(182, 163, 163, 0.75);
  -moz-box-shadow: 4px 4px 16px 0px rgba(182, 163, 163, 0.75); */
`;

export const References = styled.div`
  flex-direction: column;
  width: 100px;
  height: 30vh;
  /* box-shadow: 4px 4px 16px 0px rgba(182, 163, 163, 0.75);
  -webkit-box-shadow: 4px 4px 16px 0px rgba(182, 163, 163, 0.75);
  -moz-box-shadow: 4px 4px 16px 0px rgba(182, 163, 163, 0.75); */
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

export const ReferenceCount = styled.div`
  display: flex;
  flex-direction: column;
`

export const CanvasContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const SampleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  height: 70px;
  width: 30%;
`;

export const ToolsAndImages = styled.div`
  width: 58%;
  display: flex;
  justify-content: space-between;
`

export const SampleImg = styled.img`
  height: 70px;
  width: 70px;
  border-radius: 5%;
  /* box-shadow: 2px 1px 16px 0px rgba(182, 163, 163, 0.75);
  -webkit-box-shadow: 2px 1px 16px 0px rgba(182, 163, 163, 0.75);
  -moz-box-shadow: 2px 1px 16px 0px rgba(182, 163, 163, 0.75); */
`;

export const TopContainer = styled.div`
  height: 15%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
`

export const SubmitButton = styled(BlueButton)`

`
export const CanvasWithButtons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 58%;
`

export const SaveButton = styled(TransparentButton)`
  height: 30px;
`
export const DummyButton = styled(TransparentButton)`
  height: 30px;
  visibility: hidden;
`
