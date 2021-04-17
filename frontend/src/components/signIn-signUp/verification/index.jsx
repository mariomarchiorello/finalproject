import Header from "../../header"
import { Background, GlobalInput, Main } from "../../../globalstyles/globalStyle"
import { VerButton, VerificationMsg, VerInputContainer, VerLabel } from "./style"
import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import Footer from "../../footer";
import baseUrl from "../../../helpers/baseUrl";



const Verification = () => {

    const history = useHistory()

    const [code, setCode] = useState("")
    const [email, setEmail] = useState("")
    const [first_name, setFirstName] = useState("")
    const [last_name, setLastName] = useState("")
    const [password, setPassword] = useState("")
    const [password_repeat, setPassword_repeat] = useState("")
    

    
    const veriHandler = (e) => {
        e.preventDefault();
        const verificationCredentials = {
            email : email,
            username: email,
            first_name: first_name,
            last_name: last_name,
            password: password,
            code: code,
            password_repeat: password_repeat
        }
        //const url = "http://localhost:8000.propulsion-learn.ch/backend/api/auth/registration/";

        const url = `${baseUrl}auth/registration/validation/`;
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
                    <section className="right"></section>
                    <div>
                        <VerLabel htmlFor="code">verification code</VerLabel>
                        <GlobalInput type="text" name="code"
                                     value={code} onChange={(e)=>{setCode(e.target.value)}}></GlobalInput>
                        <VerLabel htmlFor="email">email</VerLabel>
                        <GlobalInput type="text" name="email"
                                     value={email} onChange={(e)=>{setEmail(e.target.value)}}></GlobalInput>
                        <VerLabel htmlFor="first">first name</VerLabel>
                        <GlobalInput type="text" name="first"
                        value={first_name} onChange={(e)=>{setFirstName(e.target.value)}}></GlobalInput>
                    </div>
                    <div>
                        <VerLabel htmlFor="last">last name</VerLabel>
                        <GlobalInput type="text" name="last"
                        value={last_name} onChange={(e)=>{setLastName(e.target.value)}}></GlobalInput>
                        <VerLabel htmlFor="password">password</VerLabel>
                        <GlobalInput type="password" name="password"
                        value={password} onChange={(e)=>{setPassword(e.target.value)}}></GlobalInput>
                        <VerLabel htmlFor="password_repeat">repeat password</VerLabel>
                        <GlobalInput type="password" name="password_repeat"
                        value={password_repeat} onChange={(e)=>{setPassword_repeat(e.target.value)}}></GlobalInput>
                    </div>
                </VerInputContainer>
                <VerButton type='submit' onClick={veriHandler}>Register</VerButton>
            </Main>
        </Background>
    </>

}

export default (Verification)