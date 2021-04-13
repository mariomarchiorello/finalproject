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
import {AddImagesContainer, ImagesContainer, LabelInputContainer, OuterInputsContainer} from "./style";


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
                                <GlobalInput/>
                                <GlobalLabel>water depth</GlobalLabel>
                                <GlobalInput/>
                            </LabelInputContainer>

                            {/*middle label column*/}
                            <LabelInputContainer>
                                <GlobalLabel>latitude*</GlobalLabel>
                                <GlobalInput/>
                                <GlobalLabel>longitude*</GlobalLabel>
                                <GlobalInput/>
                            </LabelInputContainer>

                            {/*right label column*/}
                            <LabelInputContainer>
                                <GlobalLabel>air temperature</GlobalLabel>
                                <GlobalInput/>
                                <GlobalLabel>water temperature</GlobalLabel>
                                <GlobalInput/>
                            </LabelInputContainer>
                        </OuterInputsContainer>

                        {/*image section*/}
                        <AddImagesContainer>
                            <SmallBlueButton>Add Images</SmallBlueButton>
                            <ImagesContainer>
                                <image/>
                                <image/>
                                <image/>
                                <image/>
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
