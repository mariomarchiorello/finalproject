import React from 'react'
import Header from "../header";
import { Background, Main, GlobalLabel } from "../../globalstyles/globalStyle"
import { TitleWrapper, Logo, PersonContainer, SupportContainer, LeftContainer, AboutContainer, HyperLinks } from "./style"
import goes from "../../assets/graphics/goes-logo_color-white.png"
import propulsion from "../../assets/graphics/Propulsion.png"

const About = () => {

    return <>
        <Background>
            <Header/>
            <Main>
                <TitleWrapper>
                    <span>The GOES app created by</span>
                </TitleWrapper>
                <AboutContainer>
                    <LeftContainer>
                        <PersonContainer>
                            <GlobalLabel>Mario Marchiorello</GlobalLabel>
                            <HyperLinks href="https://www.linkedin.com/in/mario-marchiorello-516859140/" target="_blank">LinkedIn</HyperLinks>
                        </PersonContainer>
                        <PersonContainer>
                            <GlobalLabel>Dusko Radovic</GlobalLabel>
                            <HyperLinks href="https://www.linkedin.com/in/duško-radović-413b60180/" target="_blank">LinkedIn</HyperLinks>
                        </PersonContainer>
                        <PersonContainer>
                            <GlobalLabel>Ezequias Calvo</GlobalLabel>
                            <HyperLinks href="https://www.linkedin.com/in/ezequias-calvo-ladmann-9868481a7/" target="_blank">LinkedIn</HyperLinks>
                        </PersonContainer>
                        <PersonContainer>
                            <GlobalLabel>Dino Rossi</GlobalLabel>
                            <HyperLinks href="https://www.linkedin.com/in/dinoprossi/" target="_blank">LinkedIn</HyperLinks>
                        </PersonContainer>
                        <PersonContainer>
                            <GlobalLabel>Andras Gombos</GlobalLabel>
                            <HyperLinks href="https://www.linkedin.com/in/andrasgombos/" target="_blank">LinkedIn</HyperLinks>
                        </PersonContainer>

                    </LeftContainer>
                    <SupportContainer>
                        <span>Supported by</span>
                        <PersonContainer>
                            <HyperLinks href="https://www.goesfoundation.com/" target="_blank">
                                <Logo src={goes}/>
                                GOES Foundation</HyperLinks>
                        </PersonContainer>
                        <PersonContainer>
                            <HyperLinks href="https://propulsion.academy/" target="_blank">
                                <Logo src={propulsion}/>  
                                Propulsion Academy</HyperLinks>
                        </PersonContainer>
                    </SupportContainer>
                </AboutContainer>
            </Main>
            
        </Background>
    </>
}

export default(About)