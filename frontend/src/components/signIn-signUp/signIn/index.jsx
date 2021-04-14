import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {Link, useHistory} from 'react-router-dom';

import { Background, GlobalInput, Main } from '../../../globalstyles/globalStyle';
import { signInAction } from '../../../store/actions/signInAction';
import Header from '../../header';
import { RegButton, RegInputContainer, RegistrationWrapper } from '../signUp/style';
import { VerLabel } from '../verification/style';
//import {getUserMeAction} from "../../../store/actions/getUserSelfAction";

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
    const token = localStorage.getItem("token")
    //console.log("from inside signin",token)
    return (
        <>
            <Background>
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
                        <Link to='/resetOne'><p>forgot password?</p></Link>
                    </RegInputContainer>
                </Main>
            </Background>
        </>    
            


    )
}
