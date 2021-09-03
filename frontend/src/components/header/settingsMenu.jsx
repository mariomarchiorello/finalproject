import React from 'react';
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import {LoginButton, MenuContainer} from "./style";

function SettingsMenu() {

    const history = useHistory();
    const dispatch = useDispatch();


/*----------------- log out and go back to Landingpage-------------*/
    const logout = (e) => {
            e.preventDefault()
            localStorage.clear()
            window.location.reload()
            history.push('/sign-in')
        }



    return (
        <>
            <MenuContainer>
                <LoginButton>Change Theme</LoginButton>
                <LoginButton>Edit Profile</LoginButton>
                <LoginButton>Change Password</LoginButton>
                <LoginButton onClick={logout}>Log Out</LoginButton>
            </MenuContainer>
        </>
    );
}

export default SettingsMenu;