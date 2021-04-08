import { HeaderContainer, Logo, RightContainer, Profile, LoginButton, LogoContainer } from "./style"
 import goesLogo3 from "../../assets/graphics/GOES3.jpg"
 import first from "../../assets/graphics/bigicon.png"
 import second from "../../assets/graphics/goesicon.png"

const Header = () => {

    return  <>
    <HeaderContainer>
        <LogoContainer>
            <Logo src={first}></Logo>
            <Logo src={second}></Logo>
        </LogoContainer>
        <RightContainer>
          <Profile>Username</Profile>
          <LoginButton>Sign Out</LoginButton>
        </RightContainer>
    </HeaderContainer>
  </>
}

export default (Header)
