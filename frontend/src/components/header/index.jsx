import {HeaderContainer, Logo, RightContainer, LogoContainer, SettingsIcon} from "./style"
import darklogo from "../../assets/graphics/goes-logo_color-white.png"
import lightlogo from "../../assets/graphics/GOES-Logo_dark-text.png"
import {Link, useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from 'react'
import Modal from "react-modal"
import icon from "../../assets/graphics/settings_icon.png"
import SettingsMenu from "./settingsMenu";
// import Toggle from "../themes/toggle";
// import { useDarkMode } from "../themes/useDarkMode"

const Header = () => {
    const history = useHistory();
    const dispatch = useDispatch();
/*------------------- not sure, need to talk to andirs about all this theme stuff------*/
    const ThemeEnabled = useSelector((state) => state.UserReducer.ThemeEnabled)

/*------------ getting the token to confirm that the right sections are rendered------*/
    useEffect(()=>{
        setLocalToken(localStorage.getItem("token"));
    },[]);
    const [localToken, setLocalToken] = useState("");

/*------------ activating the modal with onClick event-------------*/
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const setModalIsOpenToTrue =()=>{
        setModalIsOpen(true)
    }
/*---------------- styling for modal-----------------------------------*/
const customStyles = {
        content : {
            display:"flex",
            flexdirection:"column",
            justifyContent:"center",
            alignItems:"center",
            marginTop: '3%',
            marginLeft: '70vw',
            marginRight: '300px',
            height:"30vh",
            width:"22vw",
            backgroundColor: "rgba(18, 18, 18, 0.75)",
            border:"none",

        },
        overlay : {
            backgroundColor: "transparent"
        }
    };



// const profileMainAction = useSelector( state => state.UserReducer.profileMainSection);




    return  <>
    <HeaderContainer>
{/*----------- determines the (to="") value when clicking on the logo in the hearder--------------------------------*/}

        {localToken ?
            (<Link  to="/start"><LogoContainer><Logo src={ThemeEnabled === true ? lightlogo : darklogo}/></LogoContainer></Link>) :
            (<Link to="/"><LogoContainer><Logo src={ThemeEnabled === true ? lightlogo : darklogo}/></LogoContainer></Link>)}

{/*---------- determines what will render in the menu bar, depending on the localstorage.token---------------------*/}

        {localToken ?
            (<RightContainer>
                <SettingsIcon onClick={setModalIsOpenToTrue} src={icon}></SettingsIcon>

             </RightContainer>) : null}


{/*----------- if the user is NOT logged (so there is no token present) there is no need for the settings menu */}
        {localToken ? null : (<RightContainer></RightContainer>)}
    </HeaderContainer>
    <Modal isOpen={modalIsOpen} style={customStyles} onRequestClose={()=> setModalIsOpen(false)}>
        <SettingsMenu/>
    </Modal>

  </>
}

export default(Header)
