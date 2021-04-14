import Header from "../../header"
import { Background, GlobalInput, Main } from "../../../globalstyles/globalStyle"
import { VerButton, VerificationMsg, VerInputContainer, VerLabel } from "./style"
import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import Footer from "../../footer";
import baseUrl from "../../../helpers/baseUrl";



const PasswordReset = () => {

    const history = useHistory()

    const [code, setCode] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [password_repeat, setPassword_repeat] = useState("")
    

    
    const veriHandler = (e) => {
        e.preventDefault();
        const verificationCredentials = {
            email : email,
            password: password,
            code: code,
            password_repeat: password_repeat
        }

        const url = `${baseUrl}/auth/password-reset/`;
        const config = {
            method: "PATCH",
            body: JSON.stringify(verificationCredentials),
            headers: { "Content-Type": "application/json"}
        }
        fetch(url,config)
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
            history.push('/sign-in')
    }



    return <>
        <Background>
            <Header/>
            <Main>
                <VerificationMsg>
                    <span>Congratulations!</span>
                    <p>Please check your email for the verification code to finish the process.</p>
                </VerificationMsg>
                <VerInputContainer>
                    <VerLabel htmlFor="code">verification code</VerLabel>
                    <GlobalInput type="text" name="code"
                    value={code} onChange={(e)=>{setCode(e.target.value)}}></GlobalInput>
                    <VerLabel htmlFor="email">verification code</VerLabel>
                    <GlobalInput type="text" name="email"
                    value={code} onChange={(e)=>{setEmail(e.target.value)}}></GlobalInput>
                    <VerLabel htmlFor="password">password</VerLabel>
                    <GlobalInput type="password" name="password"
                    value={password} onChange={(e)=>{setPassword.apply(e.target.value)}}></GlobalInput>
                    <VerLabel htmlFor="password_repeat">repeat password</VerLabel>
                    <GlobalInput type="password" name="password_repeat"
                    value={password_repeat} onChange={(e)=>{setPassword_repeat(e.target.value)}}></GlobalInput>
                    <VerButton type='submit' onClick={veriHandler}>Register</VerButton>
                </VerInputContainer>
            </Main>
            <Footer/>
        </Background>
    </>

}
export default (PasswordReset)