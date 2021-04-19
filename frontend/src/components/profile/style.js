import styled from 'styled-components'
import {Background, Main} from "../../globalstyles/globalStyle";



export const SelectionContainer = styled.div`
    height:7vh;
    width:70vw;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-around;


    .underscored{
        /* max-width:8vw; */
        color: ${props => props.theme.labelcolor };
        text-decoration:none;
        border-bottom: transparent;
    }

    @media (max-width: 1620px) {
    width:50vw;
    padding:2%;
    }
`;

export const BackgroundProfile = styled(Background)`
    width: 100%;
    min-height: 100%;
    background-color: ${props => props.theme.bgcolor };
    z-index: -5;
  display: flex;
  flex-grow: 4;

`;

export const BottomContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content:flex-end ;
  //margin-top: 5%;
  
`;

export const MainProfile = styled(Main)`
  background-color: ${props => props.theme.bgcolor }; 
  height: 100%;
  z-index: 5;
`;

export const DisplayContainer = styled.div`
  
  height: 75vh;
  overflow: scroll;
  overflow-x: hidden;
  
  // width 
::-webkit-scrollbar {
  width: 10px;
}

/// Track /
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey; 
  border-radius: 10px;
}
 
/// Handle /
::-webkit-scrollbar-thumb {
  background: grey; 
  border-radius: 10px;
}

 //Handle on hover 
::-webkit-scrollbar-thumb:hover {
  background: black; 
}
  

`;
