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
        color:white;
        text-decoration:none;
        border-bottom: transparent;
    }

    @media (max-width: 1620px) {
    width:50vw;
    padding:2%;
    }
`;

export const BackgroundProfile = styled(Background)`
    width: auto;
    height: 100%;
    background-color: black;
    z-index: -5;

`;

export const BottomContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content:flex-end ;
  margin-top: 5%;
  
`;

export const MainProfile = styled(Main)`
height: 100%;
  z-index: 5;
`;
