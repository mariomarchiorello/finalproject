import { HeaderContainer, Logo, RightContainer, Profile, LoginButton, LogoContainer } from "./style"
 import first from "../../assets/graphics/img_2.png"

import {withAuth} from "../HOC";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";

const Header = () => {

    const dispatch = useDispatch();

    const profileHandler = value => {
        dispatch({type:"PROFILE-EDIT-HANDLER",payload: value})
        console.log("from in da header--> go to profile")
    };

    const logOut = () => localStorage.clear()

    return  <>
    <HeaderContainer>

            <Link to="/"><LogoContainer>
                <Logo src={first}/>
            </LogoContainer></Link>
            { withAuth( <RightContainer><Profile onClick={()=>profileHandler("info")} to='/profile'>Username</Profile><LoginButton onCLick={logOut}>Sign Out</LoginButton></RightContainer> )}
            <RightContainer><Link to='/sign-up'><Profile>Join</Profile></Link><Link to = '/sign-in'><LoginButton >Sign in</LoginButton></Link></RightContainer>;

    </HeaderContainer>
  </>
}

export default (Header)
