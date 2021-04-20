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
  transition: color 0.5s;
  opacity:100%;
  :hover{
    cursor: pointer;
    color:#30ADEA;  
  }
 .left{
   display: flex;
   justify-content: space-around;
   line-height: 2;
   width: 50%;
 }
  .right{
    width: 50%;
    display: flex;
    justify-content: flex-start;
    img{
      margin: 2%;
      height: 6rem;
    }
  }  
`;
