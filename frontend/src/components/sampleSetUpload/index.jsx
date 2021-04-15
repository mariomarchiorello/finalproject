import React, {useState} from 'react'
import {Link, useHistory} from "react-router-dom"
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
import baseUrl from "../../helpers/baseUrl";


const CreateNewSampleSet = () => {

    // const token = localStorage.getItem('token');
    const history = useHistory()

    const [collectionDate, setCollectionDate] = useState("");
    // day/night toggle missing
    const [waterDepth, setWaterDepth] = useState("");
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    const [airTemperature, setAirTemperature] = useState("");
    const [waterTemperature, setWaterTemperature] = useState("");
    // checkboxes
    const [foamChecked, setFoamChecked] = useState(false)
    const [oilChecked, setOilChecked] = useState(false)
    const [bioluminescenceChecked, setBioluminescenceChecked] = useState(false)
    const [sunChecked, setSunChecked] = useState(false)
    const [cloudChecked, setCloudChecked] = useState(false)
    const [rainChecked, setRainChecked] = useState(false)
    const [snowChecked, setSnowChecked] = useState(false)
    const [stormChecked, setStormChecked] = useState(false)

    // // checkboxes console verification
    // console.log('Water Surface Characteristics:')
    // console.log('foam checked', foamChecked)
    // console.log('oil checked', oilChecked)
    // console.log('bio checked', bioluminescenceChecked)
    // console.log('Weather Events:')
    // console.log('sun checked', sunChecked)
    // console.log('cloud checked', cloudChecked)
    // console.log('rain checked', rainChecked)
    // console.log('snow checked', snowChecked)
    // console.log('storm checked', stormChecked)
    // console.log('--------------------')

    // const [surface, setSurface] = useState("");
    // const [weather, setWeather] = useState("");

    // images
    const [image, setImage] = useState(null);


    const NewSampleSetHandler = (event) =>  {
        event.preventDefault();
        // const url = "https://goes-app.propulsion-learn.ch/backend/api/samples/new/";
        const url = `${baseUrl}samples/new/`

        let formData = new FormData();
        // basic info
        formData.append('collection_date', collectionDate)
        formData.append('sample_depth', waterDepth)
        formData.append('sample_latitude', latitude)
        formData.append('sample_longitude', longitude)
        formData.append('air_temperature', airTemperature)
        formData.append('water_temperature', waterTemperature)

        // water surface and weather variables
        // formData.append('water_surface', surface)
        // formData.append('weather_events', weather)
        formData.append('foam', String(foamChecked))
        formData.append('oil', String(oilChecked))
        formData.append('bioluminescence', String(bioluminescenceChecked))
        formData.append('sun', String(sunChecked))
        formData.append('cloud', String(cloudChecked))
        formData.append('rain', String(rainChecked))
        formData.append('snow', String(snowChecked))
        formData.append('storm', String(stormChecked))

        // images
        formData.append('images', image)


        const config = {
            method: "POST",
            body: formData,
            headers: new Headers ({
                // "Authorization": `Bearer ${token}`,
                "Authorization": `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjIwMTEzMTE4LCJqdGkiOiI1ZDI3YTM0NGNlNjA0YTZlOTEyZjk5Y2Y4NzgyYjU2NSIsInVzZXJfaWQiOjEyfQ.OOGiejtyT0LbvH0fRSlLyhbPOQrxwALvwNpM4WakZGg`,
            })
        }
        fetch(url, config)
        .then(res => res.json())
        .then(data => console.log(data))
        history.push('/annotate')
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
                                <GlobalLabel>collection date *</GlobalLabel>
                                <GlobalInput name='collection_date' type='date' value={undefined} onChange={(e)=>setCollectionDate(e.target.value)}/>
                                <GlobalLabel>water depth</GlobalLabel>
                                <GlobalInput name='sample_depth' type='text' value={undefined} onChange={(e)=>setWaterDepth(e.target.value)}/>
                            </LabelInputContainer>

                            <LabelInputContainer>
                                <GlobalLabel>latitude *</GlobalLabel>
                                <GlobalInput name='sample_latitude' type='text' value={undefined} onChange={(e)=>setLatitude(e.target.value)}/>
                                <GlobalLabel>longitude *</GlobalLabel>
                                <GlobalInput name='sample_longitude' type='text' value={undefined} onChange={(e)=>setLongitude(e.target.value)}/>
                            </LabelInputContainer>

                            <LabelInputContainer>
                                <GlobalLabel>air temperature</GlobalLabel>
                                <GlobalInput name='air_temperature' type='text' value={undefined} onChange={(e)=>setAirTemperature(e.target.value)}/>
                                <GlobalLabel>water temperature</GlobalLabel>
                                <GlobalInput name='water_temperature' type='text' value={undefined} onChange={(e)=>setWaterTemperature(e.target.value)}/>
                            </LabelInputContainer>
                        </OuterInputsContainer>

                        <CheckboxFieldsContainer>
                            <StandardText>Water Surface Characteristics<SmallText>(Select all that apply)</SmallText></StandardText>
                                <StandardText>Foam <input type={'checkbox'} name={'foam'} onChange={() => setFoamChecked(!foamChecked)} checked={foamChecked} /></StandardText>
                                <StandardText>Oil <input type={'checkbox'} name={'oil'} onChange={() => setOilChecked(!oilChecked)} checked={oilChecked} /></StandardText>
                                <StandardText>Bioluminescence <input type={'checkbox'} name={'bioluminescence'} onChange={() => setBioluminescenceChecked(!bioluminescenceChecked)} checked={bioluminescenceChecked} /></StandardText>
                        </CheckboxFieldsContainer>

                        <CheckboxFieldsContainer>
                            <StandardText>Weather Events<SmallText>(Select all that apply)</SmallText></StandardText>
                                <StandardText>Sun <input type={'checkbox'} name={'sun'} onChange={() => setSunChecked(!sunChecked)} checked={sunChecked} /></StandardText>
                                <StandardText>Cloud <input type={'checkbox'} name={'cloud'} onChange={() => setCloudChecked(!cloudChecked)} checked={cloudChecked} /></StandardText>
                                <StandardText>Rain <input type={'checkbox'} name={'rain'} onChange={() => setRainChecked(!rainChecked)} checked={rainChecked} /></StandardText>
                                <StandardText>Snow <input type={'checkbox'} name={'snow'} onChange={() => setSnowChecked(!snowChecked)} checked={snowChecked} /></StandardText>
                                <StandardText>Storm <input type={'checkbox'} name={'storm'} onChange={() => setStormChecked(!stormChecked)} checked={stormChecked} /></StandardText>
                        </CheckboxFieldsContainer>

                        <AddImagesContainer>
                            <SmallBlueButton>Add Images</SmallBlueButton>
                            <input name='image' type='file' multiple value= {undefined} onChange={(e)=>setImage(e.target.files[0])}/>
                            <ImagesContainer>
                                {/*placeholder images, should only show when images are added*/}
                                <ImagePreview src={planktonImage} alt="Plankton" />
                                <ImagePreview src={planktonImage} alt="Plankton" />
                                <ImagePreview src={planktonImage} alt="Plankton" />
                                <ImagePreview src={planktonImage} alt="Plankton" />
                            </ImagesContainer>
                        </AddImagesContainer>

                        <BlueButton type='submit' onClick={NewSampleSetHandler}>Continue</BlueButton>
                        <Link to='/summary'><TransparentButton>Go To Summary</TransparentButton></Link>
                    </CenterContainer>
                </Main>
            <Footer/>
        </Background>
    </>
}

export default (CreateNewSampleSet)
