import { HeaderContainer, Logo, RightContainer, Profile, LoginButton, LogoContainer } from "./style"
 import first from "../../assets/graphics/img_2.png"

import {withAuth} from "../HOC";
import {Link} from "react-router-dom";

const Header = () => {


    const logOut = () => localStorage.clear()


    return  <>
    <HeaderContainer>

            <LogoContainer>
                <Logo src={first}/>
            </LogoContainer>
            { withAuth( <RightContainer><Profile to='/profile'>Username</Profile><LoginButton onCLick={logOut}>Sign Out</LoginButton></RightContainer> )}
            <RightContainer><Link to='/sign-up'><Profile>Join</Profile></Link><Link to = '/sign-in'><LoginButton >Sign in</LoginButton></Link></RightContainer>;

    </HeaderContainer>
  </>
}

export default (Header)
