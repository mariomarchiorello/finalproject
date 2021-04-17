import React from 'react'
import Header from "../header"
import Footer from "../footer"

import {
    Background, BlueButton, CenterContainer, GlobalLabel,
    Main, TransparentButton,
} from "../../globalstyles/globalStyle"

import {
    AddImagesContainer,
    CheckboxFieldsContainer, ImagePreview, ImagesContainer,
    LabelInputContainer, OuterInputsContainer, StandardText,
    TitleWrapper
} from "../sampleSetUpload/style"
import {Link} from "react-router-dom";
import placeholderimg from "../../assets/graphics/placeholder.jpg";


const SampleSetSummary = () => {



return <>
        <Background>
            <Header/>
                <Main>
                    <TitleWrapper>
                        <span>Sample Set Summary</span>
                    </TitleWrapper>
                    <CenterContainer>
                        <GlobalLabel>Sample Information</GlobalLabel>
                        <OuterInputsContainer>
                            <LabelInputContainer>
                                <GlobalLabel>Collection Date</GlobalLabel>
                                <GlobalLabel>Water Depth</GlobalLabel>
                            </LabelInputContainer>

                            <LabelInputContainer>
                                <GlobalLabel>Latitude</GlobalLabel>
                                <GlobalLabel>Longitude</GlobalLabel>
                            </LabelInputContainer>

                            <LabelInputContainer>
                                <GlobalLabel>Air Temperature</GlobalLabel>
                                <GlobalLabel>Water Temperature</GlobalLabel>
                            </LabelInputContainer>
                        </OuterInputsContainer>

                        <CheckboxFieldsContainer>
                            <StandardText>Water Surface Characteristics:</StandardText>
                        </CheckboxFieldsContainer>

                        <CheckboxFieldsContainer>
                            <StandardText>Weather Events:</StandardText>
                        </CheckboxFieldsContainer>

                        <Link to='/upload'><TransparentButton>Edit Sample Information</TransparentButton></Link>


                        <GlobalLabel>Annotation Overview</GlobalLabel>
                        <AddImagesContainer>

                            <ImagesContainer>
                                <ImagePreview src={placeholderimg} alt="annotated image 1 preview" />
                                <ImagePreview src={placeholderimg} alt="annotated image 2 preview" />
                                <ImagePreview src={placeholderimg} alt="annotated image 3 preview" />
                                <ImagePreview src={placeholderimg} alt="annotated image 4 preview" />
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
