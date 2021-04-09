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
@media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Box = styled.div`
    height:50vh;
    width:66vw;
    border-radius:5px;
    
`;
