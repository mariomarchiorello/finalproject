import React, {useEffect, useState} from 'react'
import {GlobalInput, GlobalLabel, SmallBlueButton} from '../../../globalstyles/globalStyle'
import {Edit, EditPasswordButton, RadioButton} from './style'
import InfoSection from "./info";
import {BottomContainer} from "../style";
import {useDispatch, useSelector} from "react-redux";
import baseUrl from "../../../helpers/baseUrl";
import {useHistory} from "react-router-dom";
import {getUserMeAction} from "../../../store/actions/getUserSelfAction";

const EditProfileSection=()=> {

    const history = useHistory()
    const dispatch = useDispatch()

    const token = localStorage.getItem("token");

    useEffect(()=>{
        dispatch(getUserMeAction(history))


    },[])

    const userSelf = useSelector(state => state.UserReducer.userMe);
    // console.log("from inside the infosection:",userSelf)


    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [first_name, setFirstName] = useState("")
    const [last_name, setLastName] = useState("")
    const [home_latitude, setHomeLat] = useState("")
    const [home_longitude, setHomeLon] = useState("")
    const [vessel, setVessel] = useState("")
    const [mode, setMode] = useState()
    
    const editProfileHandler = (e) => {
        //e.preventDefault();
        const editProfileCredentials = {
            email : email,
            username: username,
            first_name: first_name,
            last_name:last_name,
            home_latitude:home_latitude,
            home_longitude:home_longitude,
            vessel:vessel,
            mode:mode
        }
        console.log("changing credentials",editProfileCredentials)
        const config = {
            method: "PATCH",
            body: JSON.stringify(editProfileCredentials),
            headers: new Headers({
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            })
        }
        fetch(`${baseUrl}users/me/`,config)
            .then(res => res.json())
            .then(data => {
                console.log(" in da patch fatch",data)
                profileHandler("info")
            })
    }

    const profileHandler = value => {
        dispatch({type:"PROFILE-EDIT-HANDLER",payload:value});
        editProfileHandler();
    }


    return (
        <>
            <InfoSection/>
            <form>
            <Edit>

                <section className="right">

                    <GlobalLabel
                    htmlFor="username">username</GlobalLabel>
                    <GlobalInput type="text" name="username"
                     value={username} onChange={(e) => {setUsername(e.target.value)}}/>

                    <GlobalLabel htmlFor="email">email</GlobalLabel>
                    <GlobalInput type="text" name="email" value={email} onChange={(e) => {setEmail(e.target.value)}}/>

                    <GlobalLabel htmlFor="first">first name</GlobalLabel>
                    <GlobalInput type="text" name="first" value={first_name} onChange={(e) => {setFirstName(e.target.value)}}/>

                    <GlobalLabel htmlFor="last">last name</GlobalLabel>
                    <GlobalInput type="text" name="last" value={last_name} onChange={(e) => {setLastName(e.target.value)}}/>
                </section>
                <section className="right">
                    <GlobalLabel htmlFor="homeLat">latitude</GlobalLabel>
                    <GlobalInput type="text" name="homelat" value={home_latitude} onChange={(e) => {setHomeLat(e.target.value)}}/>
                    <GlobalLabel htmlFor="homeLon">longitude</GlobalLabel>
                    <GlobalInput type="text" name="homeLon" value={home_longitude} onChange={(e) => {setHomeLon(e.target.value)}}/>
                    <GlobalLabel htmlFor="vessel">vessel</GlobalLabel>
                    <GlobalInput type="text" name="vessel" value={vessel} onChange={(e) => {setVessel(e.target.value)}}/>
                        <RadioButton>
                        <GlobalLabel>mode <br/></GlobalLabel>
                            <div>
                                <input type="radio" value={1} name="Plankton"  onSelect={(e)=>{setMode(e.target.value)}} />
                                <input type="radio" value={2} name="Dark" onSelect={(e)=>{setMode(e.target.value)}} />
                                <input type="radio" value={3} name="Light" onSelect={(e)=>{setMode(e.target.value)}} />
                            </div>
                        </RadioButton>
                </section>

            </Edit>
            <BottomContainer>
                    <EditPasswordButton onClick={()=>profileHandler("changePassword")} >Change Password</EditPasswordButton>
                    <SmallBlueButton onClick={()=>profileHandler("info")} > go back</SmallBlueButton>
                    <SmallBlueButton onClick={editProfileHandler} >save</SmallBlueButton>
            </BottomContainer>
            </form>
        </>
    )
}

export default(EditProfileSection)
