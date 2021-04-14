import styled from 'styled-components'

import {Link} from 'react-router-dom'

export const HeaderContainer = styled.div`
display: flex;
//width: 100vw;
justify-content: space-between;
position: sticky;
top: 0;
background-color: #000000;
opacity: 95%;  
height: 10%;
  z-index: 10;
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
//margin-right: -40px;
  a{
    text-decoration:none;
  }
`;
export const Profile = styled(Link)`
font-size: 18px;
color: ${props => props.theme.buttoncolor };
cursor:pointer;
trasition:color 2s ease 0s;  


:hover {
color:#30ADEA ;
  
}
`;
export const LoginButton = styled.button`
margin-left: 35px;
margin-right: 35px;
background-color: transparent;
color: ${props => props.theme.buttoncolor };
font-size: 18px;
font-weight: bold;
border-radius: 10px;
border: 2px solid #30ADEA;
padding: 10px 20px 10px 20px;
cursor: pointer; 
:active{
  outline-color:#ffffff;
  }
`;

export const LogoContainer = styled.div`
width: 50%;
display: flex;
`



