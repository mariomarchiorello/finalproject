import React, {createRef, useEffect, useRef, useState} from 'react'
import {Link, useHistory} from "react-router-dom"
import Header from "../header"
import Footer from "../footer"
import {
    Background, BlueButton, CenterContainer,
    GlobalInput,
    GlobalLabel,
    Main,
    TransparentButton
} from "../../globalstyles/globalStyle"
import {
    AddImagesContainer, CheckboxFieldsContainer,
    ImagePreview,
    ImagesContainer,
    LabelInputContainer,
    OuterInputsContainer, SmallText, StandardText,
    TitleWrapper,
    FileUpload,
    UploadContainer
} from "./style"
// import planktonImage from '../../assets/background-images/10.jpg'
import baseUrl from "../../helpers/baseUrl";
import placeholderimg from "../../assets/graphics/placeholder.jpg"


const CreateNewSampleSet = () => {

    const token = localStorage.getItem('token');
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
    // images
    const [image, setImages] = useState(null);

    const [preview, setPreview] = useState([])

    // create a preview as a side effect, whenever selected file is changed
    // useEffect(() => {
    //     if (!image) {
    //         setPreview(undefined)
    //         console.log(preview)
    //         return
    //     }
    //     const objectUrl = URL.createObjectURL(image[0])
    //     setPreview(objectUrl)
    //     // free memory when ever this component is unmounted
    //     return () => URL.revokeObjectURL(objectUrl)
    // }, [image])
    
    const hiddenFileInput = React.useRef(null);
    
        const handleClick = event => {
            hiddenFileInput.current.click();
    
        };
    

     useEffect(() => {
        if (!image) {
            setPreview(undefined)
            console.log(preview)
            return
        }
        let tempPreview = []
        for (let i = 0; i < image.length; i++) {
            const objectUrl = URL.createObjectURL(image[i])
            tempPreview.push(objectUrl)
            setPreview(tempPreview)
        }

    }, [image])



    const NewSampleSetHandler = (event) =>  {
        // console.log(images)
        event.preventDefault();
        const url = `${baseUrl}samples/new/`

        let formData = new FormData();
        // basic info
        formData.append('collection_date', collectionDate)
        formData.append('sample_depth', waterDepth)
        formData.append('sample_latitude', latitude)
        formData.append('sample_longitude', longitude)
        formData.append('air_temperature', airTemperature)
        formData.append('water_temperature', waterTemperature)
        // water surface and weather event booleans
        formData.append('water_foam', String(foamChecked))
        formData.append('water_oil', String(oilChecked))
        formData.append('water_bioluminescence', String(bioluminescenceChecked))
        formData.append('weather_sun', String(sunChecked))
        formData.append('weather_cloud', String(cloudChecked))
        formData.append('weather_rain', String(rainChecked))
        formData.append('weather_snow', String(snowChecked))
        formData.append('weather_storm', String(stormChecked))
        // images
        for (let i = 0; i < image.length; i++) {
            formData.append(`images`, image[i])
        }

        const config = {
            method: "POST",
            body: formData,
            headers: new Headers ({
                "Authorization": `Bearer ${token}`,
            })
        }
        fetch(url, config)
        .then(res => res.json())
        .then(data => console.log("FROM IN DA SAMPLE_UPLOAD",data))
        history.push('/canvas-page')
    }


    return <>
        <Background>
            <Header/>
                <Main>
                    <TitleWrapper>
                        <span>Upload New Sample Set</span>
                    </TitleWrapper>
                    <UploadContainer>
                        <OuterInputsContainer>

                            <LabelInputContainer>
                                <GlobalLabel>collection date *</GlobalLabel>
                                <GlobalInput name='collection_date' type='date' placeholder='2021-04-23' onChange={(e)=>setCollectionDate(e.target.value)}/>
                                <GlobalLabel>sample depth</GlobalLabel>
                                <GlobalInput name='sample_depth' type='text' onChange={(e)=>setWaterDepth(e.target.value)}/>
                            </LabelInputContainer>

                            <LabelInputContainer>
                                <GlobalLabel>latitude *</GlobalLabel>
                                <GlobalInput name='sample_latitude' type='text' onChange={(e)=>setLatitude(e.target.value)}/>
                                <GlobalLabel>longitude *</GlobalLabel>
                                <GlobalInput name='sample_longitude' type='text' onChange={(e)=>setLongitude(e.target.value)}/>
                            </LabelInputContainer>

                            <LabelInputContainer>
                                <GlobalLabel>air temperature</GlobalLabel>
                                <GlobalInput name='air_temperature' type='text' onChange={(e)=>setAirTemperature(e.target.value)}/>
                                <GlobalLabel>water temperature</GlobalLabel>
                                <GlobalInput name='water_temperature' type='text' onChange={(e)=>setWaterTemperature(e.target.value)}/>
                            </LabelInputContainer>
                        </OuterInputsContainer>

                        <CheckboxFieldsContainer>
                            <StandardText>Water Surface Characteristics:<SmallText>(Select all that apply)</SmallText></StandardText>
                                <StandardText>Foam <input type={'checkbox'} name={'foam'} onChange={() => setFoamChecked(!foamChecked)} checked={foamChecked} /></StandardText>
                                <StandardText>Oil <input type={'checkbox'} name={'oil'} onChange={() => setOilChecked(!oilChecked)} checked={oilChecked} /></StandardText>
                                <StandardText>Bioluminescence <input type={'checkbox'} name={'bioluminescence'} onChange={() => setBioluminescenceChecked(!bioluminescenceChecked)} checked={bioluminescenceChecked} /></StandardText>
                        </CheckboxFieldsContainer>

                        <CheckboxFieldsContainer>
                            <StandardText>Weather Events:<SmallText>(Select all that apply)</SmallText></StandardText>
                                <StandardText>Sun <input type={'checkbox'} name={'sun'} onChange={() => setSunChecked(!sunChecked)} checked={sunChecked} /></StandardText>
                                <StandardText>Cloud <input type={'checkbox'} name={'cloud'} onChange={() => setCloudChecked(!cloudChecked)} checked={cloudChecked} /></StandardText>
                                <StandardText>Rain <input type={'checkbox'} name={'rain'} onChange={() => setRainChecked(!rainChecked)} checked={rainChecked} /></StandardText>
                                <StandardText>Snow <input type={'checkbox'} name={'snow'} onChange={() => setSnowChecked(!snowChecked)} checked={snowChecked} /></StandardText>
                                <StandardText>Storm <input type={'checkbox'} name={'storm'} onChange={() => setStormChecked(!stormChecked)} checked={stormChecked} /></StandardText>
                        </CheckboxFieldsContainer>

                        <AddImagesContainer>
                            {/*<SmallBlueButton>Add Images</SmallBlueButton>*/}
                            <FileUpload onClick={handleClick}>Upload Files</FileUpload>
                            <input style={{display:'none'}} ref={hiddenFileInput} name='images' type='file' multiple onChange={(e)=>setImages(e.target.files)}/>
                            {/*<input ref={this.fileRef} type="file" accept="image/png, image/jpeg" />*/}

                            <ImagesContainer>
                                {/*placeholder images, should only show when images are added*/}
                                <ImagePreview src={preview ? preview[0] : placeholderimg } alt="image 1 preview" />
                                <ImagePreview src={preview ? preview[1]  : placeholderimg } alt="image 2 preview" />
                                <ImagePreview src={preview ? preview[2]  : placeholderimg } alt="image 3 preview" />
                                <ImagePreview src={preview ? preview[3]  : placeholderimg } alt="image 4 preview" />
                            </ImagesContainer>
                        </AddImagesContainer>

                        <BlueButton type='submit' onClick={NewSampleSetHandler}>Continue</BlueButton>
                        <Link to='/summary'><TransparentButton>Go To Summary</TransparentButton></Link>
                    </UploadContainer>
                </Main>
        </Background>
    </>
}

export default (CreateNewSampleSet)
