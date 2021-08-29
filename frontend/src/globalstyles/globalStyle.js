import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const BlueButton = styled.button`
border-radius: 10px;
border: none;
background: linear-gradient(#30ADEA, #216273);
color: ${props => props.theme.buttoncolor };
padding: 10px 20px 10px 20px;
width: 12.5rem;
height: 2.5rem;
font-size: 18px;
cursor:pointer;
outline:transparent;
transition:color 0.5s;  
:hover{
  color:#121212;
}
:active{
  outline:transparent;
}
`;
export const GlobalInput = styled.input`
  font-size: 18px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  width: 12rem;
  height: 2.5rem;
  outline: transparent;
    
  
`;
export const GlobalLabel = styled.label`
  color: ${props => props.theme.labelcolor };
  font-size: 16px;
`;

export const TransparentButton = styled.button`
border-radius: 5px;
background: transparent;
color: ${props => props.theme.transbuttoncolor };
padding: 5px 20px 5px 20px;
font-size: 14px;
border: 2px solid #30ADEA;
width: auto;
cursor: pointer;
outline: transparent;  
:active{
  outline:transparent;
}
`;

export const Background = styled.div`
  background-color: ${props => props.theme.bgcolor };
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
`;

export const GlobalStyle = createGlobalStyle`
    body {
      background-color: #121212;
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
      max-width:100%;
      overflow-x:hidden;
      ::-webkit-scrollbar {
  width: 10px;
  
}

::-webkit-scrollbar-track {
  /* -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.1); */
  background-color: #E0E0E0;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
     background: linear-gradient(#30ADEA, #216273);
     border: none;
     border-radius: 10px;

}
      
    }
`;

export const CenterContainer = styled.div`
  height: 67vh;
  width: 70vw;
  background-color: ${props => props.theme.containerbg};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 0% 0% 0%;
  border: 2px solid #30adea;
  border-radius: 5px;
  //@media (max-width: 1620px) {
  //  flex-direction: column;
  //  width: 50vw;
  //  padding: 2%;
  //}
`;

export const Main = styled.div`
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
`;

export const BackgroundWithOpacity = styled.div`
    height:100vh;
    width:100vw;
    display: flex;
    flex-direction:column;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top center;
`;
export const SmallBlueButton = styled.button`
border-radius: 3px;
border: none;
background: linear-gradient(#30ADEA, #216273);
color: ${props => props.theme.smallbcolor};
width: 8rem;
height: 1.5rem;
cursor:pointer;
outline:transparent;
margin:3%;
transition:color 0.5s;  
:active{
  outline:transparent;
}
:hover{
  color: #30adea;
}    
    
`;

export const Scrollbar = styled.div`

::-webkit-scrollbar {
  width: 10px;
  background-color: ${props => props.theme.bgcolor };
}

::-webkit-scrollbar-track {
  /* -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.1); */
  background-color: #E0E0E0;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
     background: linear-gradient(#30ADEA, #216273);
     border: none;
     border-radius: 10px;

}

`
