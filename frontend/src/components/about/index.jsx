import React from 'react'
import Header from "../header";
import { Background, Main, GlobalLabel } from "../../globalstyles/globalStyle"
import { TitleWrapper, Logo, PersonContainer, SupportContainer, LeftContainer, AboutContainer, HyperLinks } from "./style"
import goes from "../../assets/graphics/goes-logo_color-white.png"
import propulsion from "../../assets/graphics/Propulsion.png"
import linkedin from "../../assets/graphics/linkedin.png"

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
                            <HyperLinks href="https://www.LinkedIn.com/in/mario-marchiorello-516859140/" target="_blank">
                                <GlobalLabel>Mario Marchiorello</GlobalLabel>
                                <Logo src={linkedin}/>
                            </HyperLinks>
                        </PersonContainer>
                        <PersonContainer>
                            <HyperLinks href="https://www.LinkedIn.com/in/duško-radović-413b60180/" target="_blank">
                                <GlobalLabel>Dusko Radovic</GlobalLabel>
                                <Logo src={linkedin}/>
                            </HyperLinks>
                        </PersonContainer>
                        <PersonContainer>
                            <HyperLinks href="https://www.LinkedIn.com/in/ezequias-calvo-ladmann-9868481a7/" target="_blank">
                                <GlobalLabel>Ezequias Calvo</GlobalLabel>
                                <Logo src={linkedin}/>
                            </HyperLinks>
                        </PersonContainer>
                        <PersonContainer>
                            <HyperLinks href="https://www.LinkedIn.com/in/dinoprossi/" target="_blank">
                                <GlobalLabel>Dino Rossi</GlobalLabel>
                                <Logo src={linkedin}/>
                            </HyperLinks>
                        </PersonContainer>
                        <PersonContainer>
                            <HyperLinks href="https://www.LinkedIn.com/in/andrasgombos/" target="_blank">
                                <GlobalLabel>Andras Gombos</GlobalLabel>
                                <Logo src={linkedin}/>
                            </HyperLinks>
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