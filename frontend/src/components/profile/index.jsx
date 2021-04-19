import React, {useEffect, useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
// import {Background, Main } from '../../globalstyles/globalStyle'
import Footer from '../footer'
import Header from '../header'
import MyProfile from './self'
import {BackgroundProfile, DisplayContainer, MainProfile, SelectionContainer} from './style'
// import { useDispatch, useSelector} from 'react-redux'
import bg1 from "../../assets/background-images/5.jpg"
import bg2 from "../../assets/background-images/8.jpg"
import bg3 from "../../assets/background-images/2.jpg"
import bg4 from "../../assets/background-images/1.jpg"
import bg5 from "../../assets/background-images/10.jpg"
import {useDispatch, useSelector} from "react-redux";
import {getUserMeAction} from "../../store/actions/getUserSelfAction";
import Completed from "./completed";



export default function Profile() {

    const history = useHistory()

    useEffect(()=>{
    dispatch(getUserMeAction(history))

    },[])

    // const userSelf = useSelector(state => state.UserReducer.userMe);
    // console.log("from inside the profile/index:",userSelf)

    const dispatch = useDispatch()
    const profileMainChoice = value => { dispatch({type:"PROFILE-MAIN-HANDLER",payload:value})}
    const profileMainAction = useSelector( state => state.UserReducer.profileMainSection);


    // const backgroundArray = [bg1, bg2, bg3, bg4, bg5];
    // const randomIndex = Math.floor(Math.random() * backgroundArray.length);
    // const selectedBackground = backgroundArray[randomIndex];

    // const background = {
    //     backgroundImage: `url(${selectedBackground})`,
    //     backgroundPosition: "top center",
    //     backgroundRepeat: "no-repeat",
    //     backgroundSize: "cover",

    //     };

    return (
        <>
            <BackgroundProfile>
                <Header/>
                <MainProfile>
                    <SelectionContainer>
                        <Link className='underscored'
                         onClick={()=>profileMainChoice("profile")}
                        >Profile</Link>
                        <Link className='underscored'
                         onClick={()=>profileMainChoice("completed")}
                        >Completed</Link>
                        <Link className='underscored'
                         onClick={()=>profileMainChoice("incomplete")}
                        >In Progress</Link>
                    </SelectionContainer>

                    {profileMainAction === "profile"? <MyProfile/> : null}
                    {profileMainAction === "completed"?<DisplayContainer> <Completed/> </DisplayContainer> : null}
                    {profileMainAction === "incomplete"? <MyProfile/> : null}
                </MainProfile>
                <Footer/>
            </BackgroundProfile>
        </>
    )
}

