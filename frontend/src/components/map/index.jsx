import React, {useEffect, useState} from 'react'
import { Background, Main } from '../../globalstyles/globalStyle'
import Footer from '../footer'
import Header from '../header'
import Map from './map'
import { BackgroundMap, Bluebutton } from './style'
//import {preventDefault} from "leaflet/src/dom/DomEvent";
import {useDispatch} from "react-redux";
import {getUserMeAction} from "../../store/actions/getUserSelfAction";
import {Link, useHistory} from "react-router-dom";

const MapPage = ()=>  {
    const history = useHistory()
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getUserMeAction(history))

    },[])

    const profileHandler = value => {
        dispatch({type:"HEADER_TO_PROFILE_ACTION",payload: value})
        history.push("/profile")
    };



    return (
        <>


                <Background>
                    <Header />
                    <Main>
                        <div><p>G O E S</p></div>
                        <BackgroundMap>
                        <Map />
                        <section className="button">
                        <Link to="/upload"><Bluebutton>Upload</Bluebutton></Link>
                        <Bluebutton onClick={()=>profileHandler(["info","profile"])} >Profile</Bluebutton>
                        </section>
                        </BackgroundMap>
                    </Main>
                    <Footer />
                </Background>
        </>
    )
}

export default (MapPage)
