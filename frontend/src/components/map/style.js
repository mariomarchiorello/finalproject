import styled from 'styled-components';
import {BlueButton,CenterContainer} from '../../globalstyles/globalStyle'



export const Bluebutton = styled(BlueButton)`
  margin-top: 15px;
  margin-left:30px;
  margin-right:30px;
    //margin-bottom:10px;
`;

export const BackgroundMap = styled(CenterContainer)`
 //background-color:pink;
  padding: 1%;
  margin-top: 2rem;
  border: none;
  background-color: ${props => props.theme.bgcolor };
    //margin: 1rem;
section.button{
     //background-color:green;
}
`;

export const Box = styled.div`
    height:100%;
    width:100%;
    border-radius:5px;
    margin:10px 10px 10px 10px;
  
    
`;
