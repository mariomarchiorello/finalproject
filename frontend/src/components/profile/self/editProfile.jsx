import React, {useState} from 'react'
import {GlobalInput, GlobalLabel, SmallBlueButton} from '../../../globalstyles/globalStyle'
import {Edit, EditPasswordButton, RadioButton} from './style'
import InfoSection from "./info";
import {BottomContainer} from "../style";
import {useDispatch} from "react-redux";

export default function EditProfileSection() {
    

    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [first_name, setFirstName] = useState("")
    const [last_name, setLastName] = useState("")
    const [home_latitude, setHomeLat] = useState("")
    const [home_longitude, setHomeLon] = useState("")
    const [vessel, setVessel] = useState("")
    const [mode, setMode] = useState("")
    

    
    const editProfileHandler = (e) => {
        e.preventDefault();
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
        const url = "https://localhost:8000.propulsion-learn.ch/backend/api/users/me/";

        //const url = "https://goes-app.propulsion-learn.ch/backend/api/users/me/";
        const config = {
            method: "PATCH",
            body: JSON.stringify(editProfileCredentials),
            headers: { "Content-Type": "application/json"}
        }
        fetch(url,config)
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }
    const dispatch = useDispatch()

    const profileHandler = value => { dispatch({type:"PROFILE-EDIT-HANDLER",payload:value})}


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
                                <label><input type="radio" value="1" checked onChange={(e)=>{setMode(e.target.value)}} /> Plankton</label>
                                <label><input type="radio" value="2" onChange={(e)=>{setMode(e.target.value)}} /> Dark</label>
                                <label><input type="radio" value="3" onChange={(e)=>{setMode(e.target.value)}} /> Light</label>
                            </div>
                        </RadioButton>
                </section>

            </Edit>
            <BottomContainer>
                    <EditPasswordButton onClick={()=>profileHandler("changePassword")} >Change Password</EditPasswordButton>
                    <SmallBlueButton  >save</SmallBlueButton>
            </BottomContainer>
            </form>
        </>
    )
}
