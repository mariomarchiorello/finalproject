import React from "react";
import bg1 from "../../assets/background-images/5.jpg";
import bg2 from "../../assets/background-images/8.jpg";
import bg3 from "../../assets/background-images/2.jpg";
import bg4 from "../../assets/background-images/1.jpg";
import bg5 from "../../assets/background-images/10.jpg";
import {Background, Main} from "../../globalstyles/globalStyle";
import {Handler} from "leaflet/dist/leaflet-src.esm";




const CanvasPage = () =>{

    const backgroundArray = [bg1, bg2, bg3, bg4, bg5];
    const randomIndex = Math.floor(Math.random() * backgroundArray.length);
    const selectedBackground = backgroundArray[randomIndex];

    const background = {
        backgroundImage: `url(${selectedBackground})`,
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",

        };


    return(
        <>
            <Background style={background}>
                <Handler/>
                <Main>

                </Main>


            </Background>


        </>
    )







}
export default(CanvasPage)