import styled from 'styled-components'

export const HeaderContainer = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
position: sticky;
top: 0;
background-color: black;
height: 4rem;
`
export const Logo = styled.img`
/* width: 70px;
height: 70px; */
padding: 10px;
`
export const RightContainer = styled.div`
display: flex;
align-items: center;
margin-right: 20px;
`
export const Profile = styled.div`
font-size: 16px;
color: #FFFFFF;

:hover {
  font-weight: bold;
}
`
export const LoginButton = styled.button`
margin-left: 35px;
margin-right: 35px;
background-color: transparent;
color: #FFFFFF;
font-size: 16px;
font-weight: bold;
border-radius: 10px;
border: 2px solid #30ADEA;
padding: 10px 20px 10px 20px;
`