import { Background, GlobalInput, Main, GlobalLabel, } from "../../../globalstyles/globalStyle"
import Header from "../../header"
import { RegistrationWrapper, RegInputContainer, RegButton } from "./style"
import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import baseUrl from "../../../helpers/baseUrl";





const ResetPwEmail = () => {

    const [regEmail,setEmail] = useState("");

    const history = useHistory()

    // <Link to='/sucess'> </Link>

    const registrationHandler = (e) => {
        e.preventDefault();
        const credentials = {
            email: regEmail,
        }

        const url = `${baseUrl}auth/password-reset/`;
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
                    <GlobalLabel htmlFor="email">email</GlobalLabel>
                    <GlobalInput type="text" name="email" value={regEmail} onChange={(e)=>setEmail(e.target.value)}/>
                    <RegButton type='submit' onClick={registrationHandler}> Continue</RegButton>
                </RegInputContainer>
            </Main>
        </Background>
    </>
}

export default (ResetPwEmail)