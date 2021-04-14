import React, {useEffect, useState} from 'react'
import { Background, Main } from '../../globalstyles/globalStyle'
import Footer from '../footer'
import Header from '../header'
import Map from './map'
import { BackgroundMap, Bluebutton } from './style'
//import {preventDefault} from "leaflet/src/dom/DomEvent";
import {useDispatch} from "react-redux";
import {getUserMeAction} from "../../store/actions/getUserSelfAction";
import {useHistory} from "react-router-dom";

const MapPage = ()=>  {
    const history = useHistory()

    // MAYBE USE USEEFFECT HOOK TO GET AUTOMATICALLY
    const dispatch = useDispatch()
    const getSelf = ()=>{
        dispatch(getUserMeAction(history));
    };

    const [userSelf, setUserSelf] = useState({})

    return (
        <>  
                <Background>
                    <Header />
                    <Main>
                        <div><p>G O E S</p></div>
                        <BackgroundMap>
                        <Map />
                        <section className="button">
                        <Bluebutton>Upload</Bluebutton>
                        <Bluebutton onClick={getSelf} >Profile</Bluebutton>
                        </section>
                        </BackgroundMap>
                    </Main>
                    <Footer />
                </Background>
        </>
    )
}

export default (MapPage)
