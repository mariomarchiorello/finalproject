import React, {useEffect} from 'react'
import Header from "../header"
import Footer from "../footer"

import {
    Background, BlueButton, CenterContainer, GlobalLabel,
    Main, TransparentButton,
} from "../../globalstyles/globalStyle"

import {
    AddImagesContainer, ImagePreview,
    ImagesContainer,
    LabelInputContainer,
    TitleWrapper
} from "../sampleSetUpload/style"

import {Link, useHistory} from "react-router-dom"
import placeHolderImg from "../../assets/graphics/placeholder.jpg"
import {useDispatch, useSelector} from "react-redux"
import {getUserSampleAction} from "../../store/actions/getUserSampleSetAction"
import {SummariesSectionsContainer} from "./style"


const SampleSetSummary = () => {

    const history = useHistory()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUserSampleAction(history))
    },[])

    const currentSample = useSelector(state => state.annotationReducer.currentSample)
    console.log('Current sample from summary page: ', currentSample)


    return <>
        <Background>
            <Header/>
                <Main>
                    <TitleWrapper>
                        <span>Sample Set Summary</span>
                    </TitleWrapper>
                    <CenterContainer>
                        <GlobalLabel>Sample Information</GlobalLabel>
                        <SummariesSectionsContainer>
                            <LabelInputContainer>
                                <GlobalLabel>Collection Date: {currentSample.collection_date}</GlobalLabel>
                            </LabelInputContainer>

                            <LabelInputContainer>
                                <GlobalLabel>Latitude: {currentSample.sample_latitude}</GlobalLabel>
                            </LabelInputContainer>

                            <LabelInputContainer>
                                <GlobalLabel>Air Temperature: {currentSample.air_temperature}</GlobalLabel>
                            </LabelInputContainer>
                        </SummariesSectionsContainer>

                        <SummariesSectionsContainer>
                            <LabelInputContainer>
                                <GlobalLabel>Sample Depth: {currentSample.sample_depth}</GlobalLabel>
                            </LabelInputContainer>

                            <LabelInputContainer>
                                <GlobalLabel>Longitude: {currentSample.sample_longitude}</GlobalLabel>
                            </LabelInputContainer>

                            <LabelInputContainer>
                                <GlobalLabel>Water Temperature: {currentSample.water_temperature}</GlobalLabel>
                            </LabelInputContainer>
                        </SummariesSectionsContainer>

                        <SummariesSectionsContainer>
                            <LabelInputContainer>
                                <GlobalLabel>Water Surface Characteristics: {!currentSample.water_foam ? '' : 'foam  '} {!currentSample.water_oil ? '' : 'oil  '} {!currentSample.water_bioluminescence ? '' : 'bioluminescence'} </GlobalLabel>
                            </LabelInputContainer>
                        </SummariesSectionsContainer>

                        <SummariesSectionsContainer>
                            <LabelInputContainer>
                                <GlobalLabel>Weather Events: {!currentSample.weather_sun ? '' : 'sun  '} {!currentSample.weather_cloud ? '' : 'clound  '} {!currentSample.weather_rain ? '' : 'rain  '} {!currentSample.weather_snow ? '' : 'snow  '} {!currentSample.weather_storm ? '' : 'storm'} </GlobalLabel>
                            </LabelInputContainer>
                        </SummariesSectionsContainer>

                        <Link to='/upload'><TransparentButton>Edit Sample Information</TransparentButton></Link>


                        <GlobalLabel>Annotation Overview</GlobalLabel>
                        <AddImagesContainer>

                            <ImagesContainer>
                                <ImagePreview src={placeHolderImg} alt="annotated image 1 preview" />
                                <ImagePreview src={placeHolderImg} alt="annotated image 2 preview" />
                                <ImagePreview src={placeHolderImg} alt="annotated image 3 preview" />
                                <ImagePreview src={placeHolderImg} alt="annotated image 4 preview" />
                                {/*<ImagePreview src={currentSample.images[0]} alt="annotated image 1 preview" />*/}
                                {/*<ImagePreview src={currentSample.images[1]} alt="annotated image 2 preview" />*/}
                                {/*<ImagePreview src={currentSample.images[2]} alt="annotated image 3 preview" />*/}
                                {/*<ImagePreview src={currentSample.images[3]} alt="annotated image 4 preview" />*/}
                            </ImagesContainer>
                        </AddImagesContainer>
                        <Link to='/canvas-page'><TransparentButton>Examine Images Further</TransparentButton></Link>

                        <Link to='/map'><BlueButton>Confirm</BlueButton></Link>
                    </CenterContainer>
                </Main>
            <Footer/>
        </Background>
    </>
}

export default (SampleSetSummary)
