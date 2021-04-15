import { HeaderContainer, Logo, RightContainer, Profile, LoginButton, LogoContainer } from "./style"
import darklogo from "../../assets/graphics/goes-logo_color-white.png"
import lightlogo from "../../assets/graphics/GOES-Logo_dark-text.png"
import {Link, useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from 'react'
import {getUserMeAction} from "../../store/actions/getUserSelfAction";
import store from "../../store";
import Toggle from "../themes/toggle";
import { useDarkMode } from "../themes/useDarkMode"
import { darkTheme, lightTheme } from "../themes/index"

const Header = () => {
    const history = useHistory();
    const dispatch = useDispatch();


    const [localToken, setLocalToken] = useState("");
    useEffect(()=>{

        setLocalToken(localStorage.getItem("token"));
        //console.log("in da useEffect", localToken);
    },[]);
    //console.log("from selecthor", localToken)

    const userSelf = useSelector(state => state.UserReducer.userMe);
   // console.log("from useSelector",storeToken)

    //console.log("from use Selecthor",userSelf.first_name)
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

    const [theme, toggleTheme] = useDarkMode();
    
    const ThemeEnabled = useSelector((state) => state.UserReducer.ThemeEnabled)

    return  <>
    <HeaderContainer>

        {localToken ? (<Link to="/map"><LogoContainer><Logo src={ThemeEnabled === true ? lightlogo : darklogo}/></LogoContainer></Link>) : (<Link to="/"><LogoContainer><Logo src={ThemeEnabled === true ? lightlogo : darklogo}/></LogoContainer></Link>)}
        {localToken ? (<RightContainer><Link><Profile onClick={()=>profileHandler(["info","profile"])}>{userSelf.first_name}'s profile</Profile></Link><LoginButton onClick={logOut}>Sign Out</LoginButton></RightContainer>) :
            (<RightContainer><Profile onClick={joinUs}>Join</Profile><Link to = '/sign-in'><LoginButton >Sign in</LoginButton></Link></RightContainer>)}
        <Toggle theme={theme} toggleTheme={toggleTheme}></Toggle>
    </HeaderContainer>
  </>
}

export default(Header)
