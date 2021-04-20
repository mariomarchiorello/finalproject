import React, {useEffect} from 'react'
import Header from "../header"
import Footer from "../footer"

import {
    Background, BlueButton, GlobalLabel,
    Main, TransparentButton,
} from "../../globalstyles/globalStyle"

import {
    ImagePreview, StandardText,
    TitleWrapper
} from "../sampleSetUpload/style"

import {Link, useHistory} from "react-router-dom"
import placeHolderImg from "../../assets/graphics/placeholder.jpg"
import {useDispatch, useSelector} from "react-redux"
import {getUserSampleAction} from "../../store/actions/getUserSampleSetAction"
import {
    ConfirmElementsContainer,
    ImagesElementsContainer, InfoLabelsContainer,
    LocalLabel, OuterImagesContainer, PlanktonCountContainer, PreviewImagesContainer,
    SummariesSectionsContainer,
    TextsContainer,
    SummaryContainer
} from "./style"


const SampleSetSummary = () => {

    const history = useHistory()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUserSampleAction(history))
    },[])

    const currentSample = useSelector(state => state.annotationReducer.currentSample)
    console.log('Current sample from summary page: ', currentSample)


    // let image;
    // let sampleImageArray = currentSample.images.map(image => image.original_image)
    // let plankton;
    // let samplePlanktonArray = currentSample.images.map(plankton = plankton.plankton)
    // console.log('plankton: ', plankton)


    return <>
        <Background>
            <Header/>
                <Main>
                    <TitleWrapper>
                        <span>Sample Set Summary</span>
                    </TitleWrapper>
                    <SummaryContainer>
                        <TextsContainer>
                            <GlobalLabel>Sample Information</GlobalLabel>
                            <SummariesSectionsContainer>
                                <InfoLabelsContainer>
                                    <LocalLabel>Collection Date: {currentSample.collection_date}</LocalLabel>
                                </InfoLabelsContainer>

                                <InfoLabelsContainer>
                                    <LocalLabel>Latitude: {currentSample.sample_latitude}</LocalLabel>
                                </InfoLabelsContainer>

                                <InfoLabelsContainer>
                                    <LocalLabel>Air Temperature: {currentSample.air_temperature}</LocalLabel>
                                </InfoLabelsContainer>
                            </SummariesSectionsContainer>

                            <SummariesSectionsContainer>
                                <InfoLabelsContainer>
                                    <LocalLabel>Sample Depth: {currentSample.sample_depth}</LocalLabel>
                                </InfoLabelsContainer>

                                <InfoLabelsContainer>
                                    <LocalLabel>Longitude: {currentSample.sample_longitude}</LocalLabel>
                                </InfoLabelsContainer>

                                <InfoLabelsContainer>
                                    <LocalLabel>Water Temperature: {currentSample.water_temperature}</LocalLabel>
                                </InfoLabelsContainer>
                            </SummariesSectionsContainer>

                            <SummariesSectionsContainer>
                                <InfoLabelsContainer>
                                    <LocalLabel>Water Surface Characteristics: {!currentSample.water_foam ? '' : 'Foam  '} {!currentSample.water_oil ? '' : 'Oil  '} {!currentSample.water_bioluminescence ? '' : 'Bioluminescence'} </LocalLabel>
                                </InfoLabelsContainer>
                            </SummariesSectionsContainer>

                            <SummariesSectionsContainer>
                                <InfoLabelsContainer>
                                    <LocalLabel>Weather Events: {!currentSample.weather_sun ? '' : 'Sun  '} {!currentSample.weather_cloud ? '' : 'Clound  '} {!currentSample.weather_rain ? '' : 'Rain  '} {!currentSample.weather_snow ? '' : 'Snow  '} {!currentSample.weather_storm ? '' : 'storm'} </LocalLabel>
                                </InfoLabelsContainer>
                            </SummariesSectionsContainer>

                            <Link to='/upload'><TransparentButton>Edit Sample Information</TransparentButton></Link>
                        </TextsContainer>


                        <ImagesElementsContainer>
                            <GlobalLabel>Annotation Overview</GlobalLabel>
                            <OuterImagesContainer>

                                <PreviewImagesContainer>


                                    {/*{sampleImageArray.map(image => <ImagePreview src={image} alt="sample Image"/>)}*/}
                                    {/*{sampleImageArray.map(phytoplankton => <LocalLabel>{sampleImageArray.}</LocalLabel>)}*/}


                                    <ImagePreview src={placeHolderImg} alt="annotated image 1 preview" />
                                    {/*<ImagePreview src={!currentSample.images[0] ? placeHolderImg : currentSample.images[0]} alt="annotated image 1 preview" />*/}
                                    {/*{ !currentSample.images[0] ? <ImagePreview src={placeHolderImg} alt="annotated image 1 preview" /> : null }*/}

                                    <PlanktonCountContainer>
                                    <LocalLabel>Phytoplankton: 1</LocalLabel>
                                    <LocalLabel>Zooplankton: 12</LocalLabel>
                                    </PlanktonCountContainer>
                                    <ImagePreview src={placeHolderImg} alt="annotated image 2 preview" />
                                    <PlanktonCountContainer>
                                    <LocalLabel>Phytoplankton: 2</LocalLabel>
                                    <LocalLabel>Zooplankton: 23</LocalLabel>
                                    </PlanktonCountContainer>
                                    {/*<ImagePreview src={currentSample.images[0]} alt="annotated image 1 preview" />*/}
                                    {/*<ImagePreview src={currentSample.images[1]} alt="annotated image 2 preview" />*/}
                                    {/*<ImagePreview src={currentSample.images[2]} alt="annotated image 3 preview" />*/}
                                    {/*<ImagePreview src={currentSample.images[3]} alt="annotated image 4 preview" />*/}
                                </PreviewImagesContainer>

                                <PreviewImagesContainer>
                                    <ImagePreview src={placeHolderImg} alt="annotated image 3 preview" />
                                    <PlanktonCountContainer>
                                    <LocalLabel>Phytoplankton: 12</LocalLabel>
                                    <LocalLabel>Zooplankton: 7</LocalLabel>
                                    </PlanktonCountContainer>
                                    <ImagePreview src={placeHolderImg} alt="annotated image 4 preview" />
                                    <PlanktonCountContainer>
                                    <LocalLabel>Phytoplankton: 18</LocalLabel>
                                    <LocalLabel>Zooplankton: 4</LocalLabel>
                                    </PlanktonCountContainer>
                                    {/*<ImagePreview src={currentSample.images[0]} alt="annotated image 1 preview" />*/}
                                    {/*<ImagePreview src={currentSample.images[1]} alt="annotated image 2 preview" />*/}
                                    {/*<ImagePreview src={currentSample.images[2]} alt="annotated image 3 preview" />*/}
                                    {/*<ImagePreview src={currentSample.images[3]} alt="annotated image 4 preview" />*/}
                                </PreviewImagesContainer>

                            </OuterImagesContainer>
                            <Link to='/annotate-dusko'><TransparentButton>Examine Images Further</TransparentButton></Link>
                        </ImagesElementsContainer>

                        <LocalLabel>Submit my sample for double check? (optional) <input type={'checkbox'} name={'storm'} /></LocalLabel>
                        {/*<LocalLabel>Storm <input type={'checkbox'} name={'storm'} onChange={() => setStormChecked(!stormChecked)} checked={stormChecked} /></LocalLabel>*/}

                        <ConfirmElementsContainer>
                            <Link to='/map'><BlueButton>Confirm</BlueButton></Link>
                        </ConfirmElementsContainer>
                    </SummaryContainer>
                </Main> 
        </Background>
    </>
}

export default (SampleSetSummary)
