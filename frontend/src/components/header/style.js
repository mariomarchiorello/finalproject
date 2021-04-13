import styled from 'styled-components'

export const HeaderContainer = styled.div`
display: flex;
width: 100vw;
justify-content: space-between;
position: sticky;
top: 0;
background-color: transparent;
height: 10%;
`;
export const Logo = styled.img`
/* width: 70px;
height: 70px; */
padding: 10px;
`;
export const RightContainer = styled.div`
display: flex;
align-items: center;
//margin-right: -40px;
  a{
    text-decoration:none;
  }
`;
export const Profile = styled.div`
font-size: 18px;
color: #FFFFFF;
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
color: #FFFFFF;
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




