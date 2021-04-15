import { HeaderContainer, Logo, RightContainer, Profile, LoginButton, LogoContainer } from "./style"
import darklogo from "../../assets/graphics/goes-logo_color-white.png"
import lightlogo from "../../assets/graphics/GOES-Logo_dark-text.png"
import {Link, useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from 'react'
import {getUserMeAction} from "../../store/actions/getUserSelfAction";
import store from "../../store";


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
    const storeToken = useSelector(state => state.UserReducer.token);
   // console.log("from useSelector",storeToken)

    //console.log("from use Selecthor",userSelf.first_name)
    const profileHandler = value => {
        dispatch({type:"HEADER_TO_PROFILE_ACTION",payload: value})
        history.push("/profile")
    };




    return  <>
    <HeaderContainer>

        {localToken ? (<Link to="/map"><LogoContainer><Logo src={darklogo}/></LogoContainer></Link>) : (<Link to="/"><LogoContainer><Logo src={darklogo}/></LogoContainer></Link>)}
        {localToken ? (<RightContainer><Profile onClick={()=>profileHandler(["info","profile"])}>{userSelf.first_name}'s profile</Profile><LoginButton>Sign Out</LoginButton></RightContainer>) :
            (<RightContainer><Profile to="/sign-up">Join</Profile><Link to = '/sign-in'><LoginButton >Sign in</LoginButton></Link></RightContainer>)}

    </HeaderContainer>
  </>
}

export default (Header)
