import React, {useState} from 'react'
import InfoSection from "./info";
import {Edit} from "./style";
import {GlobalInput, GlobalLabel, SmallBlueButton} from "../../../globalstyles/globalStyle";
import { useHistory } from "react-router-dom";
import {BottomContainer} from "../style";


export default function EditPasswordSection() {
        const history = useHistory()

    const [regEmail, setEmail]=useState("")

    const registrationHandler = (e) => {
        e.preventDefault();
        const credentials = {
            email: regEmail,
        }
        //const url = "http://localhost:8000.propulsion-learn.ch/backend/api/auth/password-reset/";

        const url = "https://goes-app.propulsion-learn.ch/backend/api/auth/password-reset/";
        const regConfig =  {
            method: "POST",
            body: JSON.stringify(credentials),
            headers: { 'Content-Type': 'application/json'}
        };
        fetch(url, regConfig)
        .then(result => result.json())
        .then(data => {
            console.log(data);
        })
        history.push("/resetTwo")
    }


    return (
        <>
            <InfoSection/>
            <Edit>
                <p className='reset'>To reset your password, please enter your E-Mail address. <br/>
                We will send you a new registration code</p>
                <section className='right'>
                   <GlobalLabel htmlFor="email">email</GlobalLabel>
                    <GlobalInput type="text" name="email" value={regEmail} onChange={(e)=>setEmail(e.target.value)}/>
                </section>
            </Edit>
            <BottomContainer>
                    <SmallBlueButton onClick={registrationHandler}>Reset Password</SmallBlueButton>
            </BottomContainer>
        </>
    )
}
