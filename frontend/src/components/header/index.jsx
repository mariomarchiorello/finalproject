import { HeaderContainer, Logo, RightContainer, Profile, LoginButton, LogoContainer } from "./style"
 import first from "../../assets/graphics/img_2.png"

import {withAuth} from "../HOC";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";



const Header = () => {
    const token = localStorage.getItem("token");
    const test = useSelector(state => state.signInReducer)
    //console.log("in da test",test)


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
            { token ? <RightContainer><Profile onClick={()=>profileHandler("info")} to='/profile'>Username</Profile><LoginButton onCLick={logOut}>Sign Out</LoginButton></RightContainer> :null }
            { token === null ? <RightContainer><Link to='/sign-up'><Profile>Join</Profile></Link><Link to = '/sign-in'><LoginButton >Sign in</LoginButton></Link></RightContainer>: null};

    </HeaderContainer>
  </>
}

export default (Header)
