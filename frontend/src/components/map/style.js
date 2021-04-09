import styled from 'styled-components';
import {BlueButton,CenterContainer} from '../../globalstyles/globalStyle'



export const Bluebutton = styled(BlueButton)`
    margin-left:10px;
    margin-right:10px;
    

`;
export const BackgroundMap = styled(CenterContainer)`
/* background-color:pink; */
section{
    /* background-color:green; */
}
@media (max-width: 1620px) {
    flex-direction: column;
    background-color: pink;
    width:60vw;
  }
`;

export const Box = styled.div`
    height:100%;
    width:100%;
    border-radius:5px;
    margin:10px;
    border:2px red solid;
    
`;
