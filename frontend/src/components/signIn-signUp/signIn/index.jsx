import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

import { Background, BlueButton, GlobalInput, Main } from '../../../globalstyles/globalStyle';
import { signInAction } from '../../../store/actions/signInAction';
import Header from '../../header';
import { VerLabel } from '../verification/style';

export default function SignIn() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const history = useHistory()

    const signInHandler = (e) => {
        e.preventDefault();
        const credentials = {
          email: email,
          password: password
        }
        dispatch(signInAction(credentials, history))
  };


    return (
        <>
            <Background>
                <Header/>
                <Main>
                <VerLabel for="email">email</VerLabel>
                <GlobalInput type="text" name="email"
                value={email} onChange={(e)=>{setEmail(e.target.value)}}></GlobalInput>
                <VerLabel for="password">password</VerLabel>
                <GlobalInput type="password" name="password"
                value={password} onChange={(e)=>{setPassword.apply(e.target.value)}}></GlobalInput>
                <BlueButton type='submit' onClick={signInHandler}></BlueButton>
                </Main>
            </Background>
        </>    
            


    )
}
