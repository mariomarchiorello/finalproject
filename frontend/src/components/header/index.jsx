import { HeaderContainer, Logo, RightContainer, Profile, LoginButton, LogoContainer } from "./style"
import darklogo from "../../assets/graphics/goes-logo_color-white.png"
import lightlogo from "../../assets/graphics/GOES-Logo_dark-text.png"
import {Link, useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import React from 'react'


const Header = (props) => {

    const history = useHistory()
    const token = localStorage.getItem("token");
    const dispatch = useDispatch();

    const profileHandler = value => {
                console.log("from in da header--> go to profile")

        dispatch({type:"PROFILE-EDIT-HANDLER",payload: value})
    };

    const logout = (e) => {
        e.preventDefault()
        localStorage.clear()
        window.location.reload()
        history.push('/')
    }


    return  <>
    <HeaderContainer>

            { token ? <Link to="/map"><LogoContainer><Logo src={darklogo}/></LogoContainer></Link> : null}
            { token === null ? <Link to="/"><LogoContainer><Logo src={darklogo}/></LogoContainer></Link> : null}
            { token ? <RightContainer><Profile onClick={()=>profileHandler("info")} to='/profile'>{props.userMe.first_name}' profile</Profile><LoginButton onCLick={logout}>Sign Out</LoginButton></RightContainer> :null }
            { token === null ? <RightContainer><Link to='/sign-up'><Profile>Join</Profile></Link><Link to = '/sign-in'><LoginButton >Sign in</LoginButton></Link></RightContainer>: null};

    </HeaderContainer>
  </>
}

export default (Header)
