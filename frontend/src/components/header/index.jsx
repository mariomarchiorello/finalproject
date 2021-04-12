import { HeaderContainer, Logo, RightContainer, Profile, LoginButton, LogoContainer } from "./style"
//  import goesLogo3 from "../../assets/graphics/GOES3.jpg"
 import first from "../../assets/graphics/bigicon.png"
 import second from "../../assets/graphics/goesicon.png"
import {withAuth} from "../HOC";
import {Link} from "react-router-dom";

const Header = () => {

    const token = localStorage.getItem('token');

   /* const headerCounter = () => {
        let count = "1"
        if (token === true){
            count = "0"
        }
        else if(token === false){
            count = "1"
        }
        return count
    }*/


    const logOut = () => localStorage.clear()


    return  <>
    <HeaderContainer>
            <LogoContainer>
                <Logo src={first}/>
                <Logo src={second}/>
            </LogoContainer>
            { withAuth( <RightContainer><Profile to='/profile'>Username</Profile><LoginButton onCLick={logOut}>Sign Out</LoginButton></RightContainer> )}
            <RightContainer><Profile to='/sign-up'>Join</Profile><Link to = '/sign-in'><LoginButton >Sign in</LoginButton></Link></RightContainer>;

    </HeaderContainer>
  </>
}

export default (Header)
