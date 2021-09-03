import styled from 'styled-components'

import {TransparentButton} from "../../globalstyles/globalStyle";

export const HeaderContainer = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
position: sticky;
top: 0;
background-color:#121212;
opacity: 85%;  
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
export const LogoContainer = styled.div`
width: 50%;
display: flex;
`
export const Logo = styled.img`
width: 190px;
height: 62px; 
padding: 10px;
margin-left: 6%;  
`;
export const RightContainer = styled.div`
display: flex;
align-items: center;
justify-content: flex-end;  
width: 40vw;
`;

export const SettingsIcon =styled.img`
  height:6vh ;
  width: 6vh ;
  margin-right: 2vw;
  cursor: pointer;
`;

export const LoginButton = styled(TransparentButton)`
  width: 65%;
  background-color: transparent;
  color: #ffffff;
  font-size: 18px;
  transition:color 0.5s;  
:hover{
  color:#30ADEA;
}
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 28vh;
  width: 20vw;
`;