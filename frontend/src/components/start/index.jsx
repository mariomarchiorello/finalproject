import React, {useEffect} from 'react';
import Header from "../header";
import {Background} from "../../globalstyles/globalStyle";
import Map from "../map/map";
import {MainStart, StartContainer, StartMap} from "./style";
import {Link, useHistory} from "react-router-dom";
import Footer from "../footer";
import {getUserMeAction} from "../../store/actions/getUserMeAction";
import {useDispatch} from "react-redux";

function StartPage() {

    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(()=>{
        dispatch(getUserMeAction(history))
    })

    const profileHandler = (value) => {
        dispatch({type:"PROFILE_MAIN_ACTION",payload: value})
        history.push("/profile")
    };


    return (
        <>
            <Background>
                <Header/>
                <MainStart>
                    <StartMap>
                        <Map/>
                    </StartMap>
                    <StartContainer>
                        <Link className="card" to="/map">Explore</Link>
                        <Link className="card" to="/incomplete-samples">Annotate</Link>
                        <Link className="card" to="/upload">Upload new Set of samples</Link>
                        <Link className="card" to="/completed-samples">My previous uploads </Link>
                    </StartContainer>
                    <Footer/>
                </MainStart>





            </Background>
        </>
    );
}

export default StartPage;