import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

import { Background, GlobalInput, Main } from '../../../globalstyles/globalStyle';
import { signInAction } from '../../../store/actions/signInAction';
import Header from '../../header';
import { RegButton, RegInputContainer, RegistrationWrapper } from '../signUp/style';
import { VerLabel } from '../verification/style';
import bg1 from "../../../assets/background-images/1.jpg"
import bg2 from "../../../assets/background-images/7.jpg"
import bg3 from "../../../assets/background-images/9.jpg"
import bg4 from "../../../assets/background-images/3.jpg"
import bg5 from "../../../assets/background-images/5.jpg"

export default function SignIn() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const history = useHistory();

    const signInHandler = (e) => {
        e.preventDefault();
        const credentials = {
          email: email,
          password: password
        }
        dispatch(signInAction(credentials, history))

  };

    const backgroundArray = [bg1, bg2, bg3, bg4, bg5];
    const randomIndex = Math.floor(Math.random() * backgroundArray.length);
    const selectedBackground = backgroundArray[randomIndex];

    const background = {
      backgroundImage: `url(${selectedBackground})`,
      backgroundPosition: "top center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      };

    return (
        <>
            <Background style={background}>
                <Header/>
                <Main>
                    <RegistrationWrapper>
                        <span> Welcome back, please sign in to proceed</span>
                    </RegistrationWrapper>
                    <RegInputContainer>
                        <VerLabel htmlFor="email">email</VerLabel>
                        <GlobalInput type="text" name="email" value={email} onChange={(e) => {setEmail(e.target.value)}}/>
                        <VerLabel htmlFor="password">password</VerLabel>
                        <GlobalInput type="password" name="password" value={password} onChange={(e) => {setPassword(e.target.value)}}/>
                        <RegButton type='submit' onClick={signInHandler}>Sign in</RegButton>
                    </RegInputContainer>
                </Main>
            </Background>
        </>    
            


    )
}
