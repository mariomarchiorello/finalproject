import React, {useState} from 'react';
import Header from "../header"
import Footer from "../footer"
import {
    Background, BlueButton, CenterContainer,
    GlobalInput,
    GlobalLabel,
    Main,
    SmallBlueButton
} from "../../globalstyles/globalStyle"
import {AddImagesContainer, ImagesContainer, LabelInputContainer, OuterInputsContainer} from "./style"
import planktonImage from '../../assets/background-images/10.jpg'


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
                        <OuterInputsContainer>
                            {/*left label coulumn*/}
                            <LabelInputContainer>
                                <GlobalLabel>collection date*</GlobalLabel>
                                <GlobalInput name='collection date' type='text' value= {undefined} onChange={(e)=>setCollectionDate(e.target.value)}/>
                                <GlobalLabel>water depth</GlobalLabel>
                                <GlobalInput name='water depth' type='text' value= {undefined} onChange={(e)=>setWaterDepth(e.target.value)}/>
                            </LabelInputContainer>

                            {/*middle label column*/}
                            <LabelInputContainer>
                                <GlobalLabel>latitude*</GlobalLabel>
                                <GlobalInput name='latitude' type='text' value= {undefined} onChange={(e)=>setLatitude(e.target.value)}/>
                                <GlobalLabel>longitude*</GlobalLabel>
                                <GlobalInput name='longitude' type='text' value= {undefined} onChange={(e)=>setLongitude(e.target.value)}/>
                            </LabelInputContainer>

                            {/*right label column*/}
                            <LabelInputContainer>
                                <GlobalLabel>air temperature</GlobalLabel>
                                <GlobalInput name='air temperature' type='text' value= {undefined} onChange={(e)=>setAirTemperature(e.target.value)}/>
                                <GlobalLabel>water temperature</GlobalLabel>
                                <GlobalInput name='water temperature' type='text' value= {undefined} onChange={(e)=>setWaterTemperature(e.target.value)}/>
                            </LabelInputContainer>
                        </OuterInputsContainer>

                        {/*image section*/}
                        <AddImagesContainer>
                            <SmallBlueButton>Add Images</SmallBlueButton>
                            <ImagesContainer>
                                <img src={planktonImage} alt="Plankton" />
                                <img src={planktonImage} alt="Plankton" />
                                <img src={planktonImage} alt="Plankton" />
                                <img src={planktonImage} alt="Plankton" />
                            </ImagesContainer>
                        </AddImagesContainer>
                        <BlueButton>Continue</BlueButton>
                    </CenterContainer>
                </Main>
            <Footer/>
        </Background>
    </>
}

export default (CreateNewSampleSet)
