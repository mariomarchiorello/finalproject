import { BackgroundWithOpacity, GlobalInput, Main, GlobalLabel, } from "../../../globalstyles/globalStyle"
import Header from "../../header"
import { RegistrationWrapper, RegInputContainer, RegButton } from "./style"
import Footer from "../../footer";
import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import bg1 from "../../../assets/background-images/1.jpg"
import bg2 from "../../../assets/background-images/2.jpg"
import bg3 from "../../../assets/background-images/3.jpg"
import bg4 from "../../../assets/background-images/4.jpg"
import bg5 from "../../../assets/background-images/5.jpg"




const SignUp = () => {

    const [regEmail,setEmail] = useState("");

    const history = useHistory()

    // <Link to='/sucess'> </Link>

    const registrationHandler = (e) => {
        e.preventDefault();
        const credentials = {
            email: regEmail,
        }
        //const url = "http://localhost:8000/backend/api/auth/registration/";
        
        const url = "https://goes-app.propulsion-learn.ch/backend/api/auth/registration/";
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

    const backgroundArray = [bg1, bg2, bg3, bg4, bg5];
    const randomIndex = Math.floor(Math.random() * backgroundArray.length);
    const selectedBackground = backgroundArray[randomIndex];

    const background = {
        backgroundImage: `url(${selectedBackground})`,
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        };


    return <>
        <BackgroundWithOpacity style={background}>
            <Header/>
            <Main>
                <RegistrationWrapper>
                    <span>Register New Account</span>
                </RegistrationWrapper>
                <RegInputContainer>
                    <GlobalLabel htmlFor="email">email</GlobalLabel>
                    <GlobalInput type="text" name="email" value={regEmail} onChange={(e)=>setEmail(e.target.value)}/>
                    <RegButton type='submit' onClick={registrationHandler}> Continue</RegButton>
                </RegInputContainer>
            </Main>
            <Footer />
        </BackgroundWithOpacity>
    </>
}

export default (SignUp)