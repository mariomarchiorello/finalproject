import React, {useState} from 'react';
import Header from "../../header"
import Footer from "../../footer"
import {Background, CenterContainer, GlobalInput, Main} from "../../../globalstyles/globalStyle"


const CreateNewSampleSet = () => {

    const [collectionDate, setCollectionDate] = useState("");
    const [waterDepth, setWaterDepth] = useState("");
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    const [airTemperature, setAirTemperature] = useState("");
    const [waterTemperature, setWaterTemperature] = useState("");
    // const [surface, setSurface] = useState("");
    // const [weather, setWeather] = useState("");
    const [image, setImage] = useState(null);

    const token = localStorage.getItem('token');


    const NewSampleSetHandler = (event) =>  {
        event.preventDefault();
        const url = "https://goes-app.propulsion-learn.ch/backend/api/samples/new/";

        let formData = new FormData();
        formData.append('collection date', collectionDate)
        formData.append('water depth', waterDepth)
        formData.append('latitude', latitude)
        formData.append('longitude', longitude)
        formData.append('air temperature', airTemperature)
        formData.append('water temperature', waterTemperature)
        // formData.append('water surface characteristics', surface)
        // formData.append('weather events', weather)
        formData.append('images', image)


        const config = {
            method: "POST",
            body: formData,
            headers: new Headers ({
                "Authorization": `Bearer ${token}`,
            })
        }
        fetch(url, config)
        .then(res => res.json())
        .then(data => console.log(data))
    }


    return <>
        <Background>
            <Header/>
                <Main>
                    <CenterContainer>
                        {/*let coulumn*/}
                        <GlobalLabel>collection date</GlobalLabel>
                        <GlobalInput/>
                        <GlobalLabel>water depth</GlobalLabel>
                        <GlobalInput/>
                        {/*middle column*/}
                        <GlobalLabel>latitude</GlobalLabel>
                        <GlobalInput/>
                        <GlobalLabel>longitude</GlobalLabel>
                        <GlobalInput/>
                        {/*right column*/}
                        <GlobalLabel>air temperature</GlobalLabel>
                        <GlobalInput/>
                        <GlobalLabel>water temperature</GlobalLabel>
                        <GlobalInput/>
                    </CenterContainer>
                </Main>
            <Footer/>
        </Background>
    </>
}

export default (CreateNewSampleSet)
