import { HeaderContainer, Logo, RightContainer, Profile, LoginButton } from "./style"
// import goesLogo3 from "../../assets/graphics/GOES.jpg"

const Header = () => {

    return  <>
    <HeaderContainer>
        <Logo></Logo>
        <RightContainer>
          <Profile>Username</Profile>
          <LoginButton>Sign Out</LoginButton>
        </RightContainer>
    </HeaderContainer>
  </>
}

export default (Header)
