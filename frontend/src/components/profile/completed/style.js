import styled from 'styled-components';
import {CenterContainer} from "../../../globalstyles/globalStyle";




export const CompletedContainer = styled(CenterContainer)`
  height:16vh;
  margin: 2%;
  color: ${props => props.theme.labelcolor };
  padding: 0;
  display: flex;
  flex-direction: row;
  background-color: transparent;
  transition: background-color 1s;
  :hover{
    cursor: pointer;
    background-color: darkgray ;
  }
 .left{
   display: flex;
   justify-content: space-around;
   line-height: 2;
   //background-color: pink;
   width: 50%;
 }
  .right{
    //background-color: green;
    width: 50%;
    display: flex;
    justify-content: flex-start;
    img{
      margin: 2%;
      height: 7rem;
      //width: 80px;
    }
  }
  
`;
