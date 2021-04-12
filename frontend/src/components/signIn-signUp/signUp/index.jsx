import { Background, GlobalInput, Main, GlobalLabel, } from "../../../globalstyles/globalStyle"
import Header from "../../header"
import { RegistrationWrapper, RegInputContainer, RegButton } from "./style"
import Footer from "../../footer";
import React, {useState} from 'react';
import { useHistory } from "react-router-dom";





const SignUp = () => {

    const [regEmail,setEmail] = useState("");

    const history = useHistory()

    // <Link to='/sucess'> </Link>

    const registrationHandler = (e) => {
        e.preventDefault();
        const credentials = {
            email: regEmail,
        }
        const url = "http://localhost:8000/backend/api/auth/registration/";
        
        //const url = "https://goes-app.propulsion-learn.ch/backend/api/auth/registration/";
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
        history.push("/verification")
    }



    return <>
        <Background>
            <Header/>
            <Main>
                <RegistrationWrapper>
                    <span>Register New Account</span>
                </RegistrationWrapper>
                <RegInputContainer>
                    <GlobalLabel htmlFor="email">email</GlobalLabel>
                    <GlobalInput type="text" name="email" placeholder='E-mail address' value={regEmail} onChange={(e)=>setEmail(e.target.value)}/>
                    <RegButton type='submit' onClick={registrationHandler}> Continue</RegButton>
                </RegInputContainer>
            </Main>
            <Footer />
        </Background>
    </>
}

export default (SignUp)