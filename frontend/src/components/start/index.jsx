import React from 'react';
import Header from "../header";
import {Background, Main} from "../../globalstyles/globalStyle";
import Map from "../map/map";
import {MainStart, StartContainer, StartMap, StartOptionContainer} from "./style";
import {Link} from "react-router-dom";
import Footer from "../footer";

function StartPage() {
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
                        <Link className="card" to="/react-image-annotate">Annotate</Link>
                        <Link className="card" to="/upload">Upload new Set of samples</Link>
                        <Link className="card" to="/profile">My previous uploads </Link>
                    </StartContainer>
                    <Footer/>
                </MainStart>





            </Background>
        </>
    );
}

export default StartPage;