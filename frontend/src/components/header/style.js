import styled from 'styled-components'

import {Link} from 'react-router-dom'
import {TransparentButton} from "../../globalstyles/globalStyle";

export const HeaderContainer = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
position: sticky;
top: 0;
background-color: transparent;
opacity: 95%;  
height: 10%;
z-index: 10;
.headermenu {
  text-decoration: none;
  font-size: 18px;
  color: ${props => props.theme.labelcolor};
  cursor: pointer;
  border-bottom: none;
  transition: color 0.5s, border-bottom 0.5s;
  :hover {
    color: #30ADEA;
  }
}
`;
export const Logo = styled.img`
width: 190px;
height: 62px; 
padding: 10px;
margin-left: 6%;  
`;
export const RightContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-evenly;  
width: 40vw;  
.headermenu {
  text-decoration: none;
  font-size: 18px;
  color: ${props => props.theme.labelcolor};
  cursor: pointer;
  border-bottom: none;
  transition: color 0.5s, border-bottom 0.5s;
  :hover {
    color: #30ADEA;
  }
}
`;

export const LoginButton = styled(TransparentButton)`
margin-left: 35px;
margin-right: 35px;
background-color: transparent;
color: ${props => props.theme.buttoncolor };
font-size: 18px;
transition:color 0.5s;  
:hover{
  color:#30ADEA;
}

:active{
  outline-color:#ffffff;
  }
`;

export const LogoContainer = styled.div`
width: 50%;
display: flex;
`



