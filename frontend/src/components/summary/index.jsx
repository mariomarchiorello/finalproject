import React from 'react'
import Header from "../header"
import Footer from "../footer"

import {
    Background, BlueButton, CenterContainer,
    Main,
} from "../../globalstyles/globalStyle"

import {
    TitleWrapper
} from "../sampleSetUpload/style"
import {Link} from "react-router-dom";


const SampleSetSummary = () => {

return <>
        <Background>
            <Header/>
                <Main>
                    <TitleWrapper>
                        <span>Sample Set Summary</span>
                    </TitleWrapper>
                    <CenterContainer>
                        <Link to='/map'><BlueButton>Confirm</BlueButton></Link>
                    </CenterContainer>
                </Main>
            <Footer/>
        </Background>
    </>
}

export default (SampleSetSummary)
