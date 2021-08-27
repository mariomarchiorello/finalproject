import { HeaderContainer, Logo, RightContainer, Profile, LoginButton, LogoContainer } from "./style"
import darklogo from "../../assets/graphics/goes-logo_color-white.png"
import lightlogo from "../../assets/graphics/GOES-Logo_dark-text.png"
import {Link, useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from 'react'
import {getUserMeAction} from "../../store/actions/getUserMeAction";
import store from "../../store";
import Toggle from "../themes/toggle";
import { useDarkMode } from "../themes/useDarkMode"

const Header = () => {
    const history = useHistory();
    const dispatch = useDispatch();


    useEffect(()=>{

        setLocalToken(localStorage.getItem("token"));
    },[]);


    const [localToken, setLocalToken] = useState("");
    const ThemeEnabled = useSelector((state) => state.UserReducer.ThemeEnabled)
    const userSelf = useSelector(state => state.UserReducer.userMe);
    const profileMainAction = useSelector( state => state.UserReducer.profileMainSection);


    const profileMainChoice = value => { dispatch({type:"PROFILE-MAIN-HANDLER",payload:value})}

    const profileHandler = (value) => {

        dispatch({type:"HEADER_TO_PROFILE_ACTION",payload: value})
        history.push("/profile")
    };

    const logOut = (e)=>{
        e.preventDefault()
        window.localStorage.clear()
        history.push("/")

    };
    const joinUs=(e)=>{
        e.preventDefault();
        history.push("/sign-up")
    }
    
    

    return  <>
    <HeaderContainer>
{/*----------- determines the (to="") value when clicking on the logo in the hearder--------------------------------*/}

        {localToken ?
            (<Link onClick={()=>profileMainChoice("home")} to="/map"><LogoContainer><Logo src={ThemeEnabled === true ? lightlogo : darklogo}/></LogoContainer></Link>) :
            (<Link to="/"><LogoContainer><Logo src={ThemeEnabled === true ? lightlogo : darklogo}/></LogoContainer></Link>)}

{/*---------- determines what will render in the menu bar, depending on the localstorage.token---------------------*/}

        {localToken ?
            (<RightContainer>
                <Link className="headermenu" to="/map" onClick={()=>profileMainChoice("home")} style={profileMainAction === "home" ? {borderBottom: "3px solid #30ADEA"} : null} >Home</Link>
                <Link className="headermenu" to="/upload" onClick={()=>profileMainChoice("upload")} style={profileMainAction === "upload" ? {borderBottom: "3px solid #30ADEA"} : null} >Upload</Link>
                <Link
                    style={profileMainAction === "profile" || profileMainAction === "info" || profileMainAction === "completed" || profileMainAction === "incomplete" ? {borderBottom: "3px solid #30ADEA"} : null}
                    className="headermenu"
                    onClick={()=>profileHandler(["info","profile"])}>{userSelf.first_name}'s profile</Link>
                <Link className="headermenu" to="/about" onClick={()=>profileMainChoice("about")} style={profileMainAction === "about" ? {borderBottom: "3px solid #30ADEA"} : null}>About</Link>
                <LoginButton onClick={logOut}>Sign Out</LoginButton></RightContainer>) : null}
        {localToken ? null:
            (<RightContainer>
                <Link className="headermenu" to="/about" onClick={()=>profileMainChoice("about")} style={profileMainAction === "about" ? {borderBottom: "3px solid #30ADEA"} : null}>About</Link>
                <Link className="headermenu" to="/sign-up">Join</Link><Link to = '/sign-in'><LoginButton >Sign in</LoginButton></Link></RightContainer>)}
    </HeaderContainer>
  </>
}

export default(Header)
