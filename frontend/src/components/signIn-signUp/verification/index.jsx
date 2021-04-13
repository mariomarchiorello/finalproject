import Header from "../../header"
import { Background, GlobalInput, Main } from "../../../globalstyles/globalStyle"
import { VerButton, VerificationMsg, VerInputContainer, VerLabel } from "./style"
import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import Footer from "../../footer";



const Verification = () => {

    const history = useHistory()

    const [code, setCode] = useState("")
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [password_repeat, setPassword_repeat] = useState("")
    

    
    const veriHandler = (e) => {
        e.preventDefault();
        const verificationCredentials = {
            email : email,
            username: username,
            password: password,
            code: code,
            password_repeat: password_repeat
        }
        //const url = "http://localhost:8000.propulsion-learn.ch/backend/api/auth/registration/";

        const url = "https://goes-app.propulsion-learn.ch/backend/api/auth/registration/validation/";
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
                    <VerLabel htmlFor="email">email</VerLabel>
                    <GlobalInput type="text" name="email"
                    value={email} onChange={(e)=>{setEmail(e.target.value)}}></GlobalInput>
                    <VerLabel htmlFor="user">username</VerLabel>
                    <GlobalInput type="text" name="user"
                    value={username} onChange={(e)=>{setUsername(e.target.value)}}></GlobalInput>
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

export default (Verification)