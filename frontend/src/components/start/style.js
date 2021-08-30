import styled from "styled-components";
import {BackgroundMap} from "../map/style";
import {Background, Main} from "../../globalstyles/globalStyle";

export const MainStart = styled(Main)`
  height: auto;
  //background-color: ;
  z-index: 0;
`;


export const StartMap = styled(BackgroundMap)`
  margin-top: 3%;
  height: 65vh;
  width: 60vw;
  background-color: transparent;
`;


export const StartContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: auto;
  width: auto;
  .card{
    text-align: center;
    text-decoration: none;
    height: 40vh ;
    width: 18vw;
    border-radius: 5px;
    background: transparent;
    color: ${props => props.theme.transbuttoncolor };
    font-size: 20px;
    border: 2px solid #30ADEA;
    cursor: pointer;
    outline: transparent;  
    :active{
      outline:transparent;
    }
    margin: 4% 2% 2% 2%;
     
  }
`;

export const BackgroundIncomplete = styled(Main)`
  position: absolute;
  top: 10%;
  display: flex;
  overflow-x: hidden;
  align-items: center;
  background-color: transparent;
  height: auto;
  overflow: scroll;
  
`