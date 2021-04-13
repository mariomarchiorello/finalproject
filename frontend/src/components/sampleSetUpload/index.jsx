import React, {useState} from 'react';
import Header from "../header"
import Footer from "../footer"
import {
    Background, BlueButton, CenterContainer,
    GlobalInput,
    GlobalLabel,
    Main,
    SmallBlueButton, TransparentButton
} from "../../globalstyles/globalStyle"
import {
    AddImagesContainer, CheckboxFieldsContainer,
    ImagePreview,
    ImagesContainer,
    LabelInputContainer,
    OuterInputsContainer, SmallText, StandardText,
    TitleWrapper
} from "./style"
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
                    <TitleWrapper>
                        <span>Upload New Sample Set</span>
                    </TitleWrapper>
                    <CenterContainer>
                        <OuterInputsContainer>

                            <LabelInputContainer>
                                <GlobalLabel>collection date*</GlobalLabel>
                                <GlobalInput name='collection date' type='text' value= {undefined} onChange={(e)=>setCollectionDate(e.target.value)}/>
                                <GlobalLabel>water depth</GlobalLabel>
                                <GlobalInput name='water depth' type='text' value= {undefined} onChange={(e)=>setWaterDepth(e.target.value)}/>
                            </LabelInputContainer>

                            <LabelInputContainer>
                                <GlobalLabel>latitude*</GlobalLabel>
                                <GlobalInput name='latitude' type='text' value= {undefined} onChange={(e)=>setLatitude(e.target.value)}/>
                                <GlobalLabel>longitude*</GlobalLabel>
                                <GlobalInput name='longitude' type='text' value= {undefined} onChange={(e)=>setLongitude(e.target.value)}/>
                            </LabelInputContainer>

                            <LabelInputContainer>
                                <GlobalLabel>air temperature</GlobalLabel>
                                <GlobalInput name='air temperature' type='text' value= {undefined} onChange={(e)=>setAirTemperature(e.target.value)}/>
                                <GlobalLabel>water temperature</GlobalLabel>
                                <GlobalInput name='water temperature' type='text' value= {undefined} onChange={(e)=>setWaterTemperature(e.target.value)}/>
                            </LabelInputContainer>
                        </OuterInputsContainer>

                        <CheckboxFieldsContainer>
                            <StandardText>Water surface characteristics<SmallText>(Select all that apply)</SmallText></StandardText>
                            <div>
                                <StandardText>Foam</StandardText>
                                <input type={'checkbox'} id={'foam'} name={'foam'}/>
                                {/*<label for="foam">Foam</label>*/}
                            </div>
                            <div>
                                <StandardText>Oil</StandardText>
                                <input type={'checkbox'} id={'oil'} name={'oil'}/>
                            </div>
                            <div>
                                <StandardText>Bioluminescence</StandardText>
                                <input type={'checkbox'} id={'bioluminescence'} name={'bioluminescence'}/>
                            </div>
                        </CheckboxFieldsContainer>
                        <CheckboxFieldsContainer>
                            <StandardText>Weather events<SmallText>(Select all that apply)</SmallText></StandardText>
                            <div>
                                <StandardText>Sun</StandardText>
                                <input type={'checkbox'} id={'sun'} name={'sun'}/>
                            </div>
                            <div>
                                <StandardText>Cloud</StandardText>
                                <input type={'checkbox'} id={'cloud'} name={'cloud'}/>
                            </div>
                            <div>
                                <StandardText>Rain</StandardText>
                                <input type={'checkbox'} id={'rain'} name={'rain'}/>
                            </div>
                            <div>
                                <StandardText>Snow</StandardText>
                                <input type={'checkbox'} id={'snow'} name={'snow'}/>
                            </div>
                            <div>
                                <StandardText>Storm</StandardText>
                                <input type={'checkbox'} id={'storm'} name={'storm'}/>
                            </div>
                        </CheckboxFieldsContainer>

                        <AddImagesContainer>
                            <SmallBlueButton>Add Images</SmallBlueButton>
                            {/*only works for single image upload?*/}
                            <input name='image' type='file' value= {undefined} onChange={(e)=>setImage(e.target.files[0])}/>
                            <ImagesContainer>
                                {/*placeholder images, should only show when images are added*/}
                                <ImagePreview src={planktonImage} alt="Plankton" />
                                <ImagePreview src={planktonImage} alt="Plankton" />
                                <ImagePreview src={planktonImage} alt="Plankton" />
                                <ImagePreview src={planktonImage} alt="Plankton" />
                            </ImagesContainer>
                        </AddImagesContainer>
                        <BlueButton type='submit' onClick={NewSampleSetHandler}>Continue</BlueButton>
                        <TransparentButton>Go To Summary</TransparentButton>
                    </CenterContainer>
                </Main>
            <Footer/>
        </Background>
    </>
}

export default (CreateNewSampleSet)
