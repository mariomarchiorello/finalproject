import React, {useEffect} from 'react'
import Header from "../header"

import {
    Background, BlueButton, GlobalLabel, TransparentButton,
} from "../../globalstyles/globalStyle"

import {ImagePreview, TitleWrapper} from "../sampleSetUpload/style"

import {Link, useHistory} from "react-router-dom"
// import placeHolderImg from "../../assets/graphics/placeholder.jpg"
import {useDispatch, useSelector} from "react-redux"
import {getUserSampleAction} from "../../store/actions/getUserSampleSetAction"
import {
    ConfirmElementsContainer,
    ImagesElementsContainer, InfoLabelsContainer,
    LocalLabel, OuterImagesContainer, PlanktonCountContainer, PreviewImagesContainer,
    SummariesSectionsContainer,
    TextsContainer,
    SummaryContainer, MainSummary
} from "./style"
import {patchSampleSet} from "../../store/actions/patchIsCompletedAction";


const SampleSetSummary = () => {

    const history = useHistory()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUserSampleAction(history))
    })

    const currentSample = useSelector(state => state.annotationReducer.currentSample)
    // console.log('Current sample from summary page: ', currentSample)




    return <>
        <Background>
            <Header/>
                <MainSummary>
                    <TitleWrapper>
                        <span >Sample Set Summary</span>
                    </TitleWrapper>
                    <SummaryContainer>
                        <TextsContainer>

                            <GlobalLabel  >Sample Information</GlobalLabel>
                            <div className="top">
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
                            </div>
                            <div className="bottom">
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
                            </div>

                            <Link to='/upload'><TransparentButton>Edit Sample Information</TransparentButton></Link>
                        </TextsContainer>


                        <ImagesElementsContainer>
                            <GlobalLabel>Annotation Overview</GlobalLabel>
                            <OuterImagesContainer>

                                <PreviewImagesContainer>
                                    {currentSample.images ? (currentSample.images.map( image => {
                                        return (
                                            <>
                                        <div>
                                        <ImagePreview src={(image.annotated_image === "" || image.annotated_image === "null" ) ? image.original_image : image.annotated_image }
                                                      alt="Samples image to be reviewed"
                                                      style={{width:"9rem",height:"9rem",padding:"0"}}
                                                        />
                                        <PlanktonCountContainer>
                                        <LocalLabel>Phytoplankton: {image.phytoplankton} </LocalLabel>
                                        <LocalLabel>Zooplankton: {image.zooplankton}</LocalLabel>
                                        </PlanktonCountContainer>
                                            </div>
                                            </>
                                        )}
                                        ) ): null}

                                </PreviewImagesContainer>
                            <Link to='/annotate-dusko'><TransparentButton>Examine Images Further</TransparentButton></Link>

                            </OuterImagesContainer>



                                    {/*{sampleImageArray.map(image => <ImagePreview src={image} alt="sample Image"/>)}*/}
                                    {/*{sampleImageArray.map(phytoplankton => <LocalLabel>{sampleImageArray.}</LocalLabel>)}*/}


                                {/*    <ImagePreview*/}
                                {/*       src={sampleImageArray[0].annotated_image === "" || sampleImageArray[0].annotated_image === "null"  ? sampleImageArray[0].original_image : sampleImageArray[0].annotated_image }*/}

                                {/*        alt="annotated image 1 preview" />*/}
                                {/*    <ImagePreview src={!currentSample.images[0] ? placeHolderImg : currentSample.images[0]} alt="annotated image 1 preview" />*/}
                                {/*    { !currentSample.images[0] ? <ImagePreview src={placeHolderImg} alt="annotated image 1 preview" /> : null }*/}

                                {/*    <PlanktonCountContainer>*/}
                                {/*    <LocalLabel>Phytoplankton: 1</LocalLabel>*/}
                                {/*    <LocalLabel>Zooplankton: 12</LocalLabel>*/}
                                {/*    </PlanktonCountContainer>*/}
                                {/*    <ImagePreview src={placeHolderImg} alt="annotated image 2 preview" />*/}
                                {/*    <PlanktonCountContainer>*/}
                                {/*    <LocalLabel>Phytoplankton: 2</LocalLabel>*/}
                                {/*    <LocalLabel>Zooplankton: 23</LocalLabel>*/}
                                {/*    </PlanktonCountContainer>*/}
                                {/*    <ImagePreview src={currentSample.images[0]} alt="annotated image 1 preview" />*/}
                                {/*    <ImagePreview src={currentSample.images[1]} alt="annotated image 2 preview" />*/}
                                {/*    <ImagePreview src={currentSample.images[2]} alt="annotated image 3 preview" />*/}
                                {/*    <ImagePreview src={currentSample.images[3]} alt="annotated image 4 preview" />*/}
                                {/*</PreviewImagesContainer>*/}

                                {/*<PreviewImagesContainer>*/}
                                {/*    <ImagePreview src={placeHolderImg} alt="annotated image 3 preview" />*/}
                                {/*    <PlanktonCountContainer>*/}
                                {/*    <LocalLabel>Phytoplankton:  </LocalLabel>*/}
                                {/*    <LocalLabel>Zooplankton: 7</LocalLabel>*/}
                                {/*    </PlanktonCountContainer>*/}
                                {/*    <ImagePreview src={placeHolderImg} alt="annotated image 4 preview" />*/}
                                {/*    <PlanktonCountContainer>*/}
                                {/*    <LocalLabel>Phytoplankton: 18</LocalLabel>*/}
                                {/*    <LocalLabel>Zooplankton: 4</LocalLabel>*/}
                                {/*    </PlanktonCountContainer>*/}
                                {/*    <ImagePreview src={currentSample.images[0]} alt="annotated image 1 preview" />*/}
                                {/*    <ImagePreview src={currentSample.images[1]} alt="annotated image 2 preview" />*/}
                                {/*    <ImagePreview src={currentSample.images[2]} alt="annotated image 3 preview" />*/}
                                {/*    <ImagePreview src={currentSample.images[3]} alt="annotated image 4 preview" />*/}
                                {/*</PreviewImagesContainer>*/}

                        </ImagesElementsContainer>

                        {/*<LocalLabel>Storm <input type={'checkbox'} name={'storm'} onChange={() => setStormChecked(!stormChecked)} checked={stormChecked} /></LocalLabel>*/}
                    </SummaryContainer>

                    <ConfirmElementsContainer>
                        <LocalLabel>Submit my sample for double check? (optional) <input type={'checkbox'} name={'storm'} /></LocalLabel>
                        <Link><BlueButton onClick={()=>dispatch(patchSampleSet(history))} >Confirm</BlueButton></Link>
                        </ConfirmElementsContainer>
                </MainSummary>
        </Background>
    </>
}

export default (SampleSetSummary)
