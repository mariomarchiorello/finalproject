import styled from 'styled-components';
import {BlueButton,CenterContainer} from '../../globalstyles/globalStyle'



export const Bluebutton = styled(BlueButton)`
  margin-top: 15px;
  margin-left:30px;
  margin-right:30px;
`;

export const BackgroundMap = styled(CenterContainer)`
  margin-top: 2rem;
  border: none;
  height: 82vh;
  width: 80vw;
  background-color: ${props => props.theme.bgcolor }
`;

export const Box = styled.div`
    height:100%;
    width:100%;
    //border-radius:15px;
    //margin:10px 10px 10px 10px;    
`;