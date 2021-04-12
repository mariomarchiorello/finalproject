import { Background, GlobalInput, Main, GlobalLabel, } from "../../../globalstyles/globalStyle"
import Header from "../../header"
import { RegistrationWrapper, RegInputContainer, RegButton } from "./style"
import Footer from "../../footer";
import React, {useState} from 'react';
import { useHistory } from "react-router-dom";





const ResetPwEmail = () => {

    const [regEmail,setEmail] = useState("");

    const history = useHistory()

    // <Link to='/sucess'> </Link>

    const registrationHandler = (e) => {
        e.preventDefault();
        const credentials = {
            email: regEmail,
        }
        const url = "http://localhost:8000.propulsion-learn.ch/backend/api/auth/password-reset/";
        
        //const url = "https://goes-app.propulsion-learn.ch/backend/api/auth/password-reset/";
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



    return <>
        <Background>
            <Header/>
            <Main>
                <RegistrationWrapper>
                    <span>Please enter your account email </span>
                </RegistrationWrapper>
                <RegInputContainer>
                    <GlobalLabel for="email">email</GlobalLabel>
                    <GlobalInput type="text" name="email" placeholder='E-mail address' value={regEmail} onChange={(e)=>setEmail(e.target.value)}/>
                    <RegButton type='submit' onClick={registrationHandler}> Continue</RegButton>
                </RegInputContainer>
            </Main>
            <Footer />
        </Background>
    </>
}

export default (ResetPwEmail)