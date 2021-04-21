import React from 'react'
import Header from "../header";
import { Background, Main, GlobalLabel } from "../../globalstyles/globalStyle"
import { TitleWrapper, PersonContainer, SupportContainer, LeftContainer, AboutContainer, HyperLinks } from "./style"

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
                            <HyperLinks href="https://www.linkedin.com/in/mario-marchiorello-516859140/">LinkedIn</HyperLinks>
                        </PersonContainer>
                        <PersonContainer>
                            <GlobalLabel>Dusko Radovic</GlobalLabel>
                            <HyperLinks href="https://www.linkedin.com/in/duško-radović-413b60180/">LinkedIn</HyperLinks>
                        </PersonContainer>
                        <PersonContainer>
                            <GlobalLabel>Ezequias Calvo</GlobalLabel>
                            <HyperLinks href="https://www.linkedin.com/in/ezequias-calvo-ladmann-9868481a7/">LinkedIn</HyperLinks>
                        </PersonContainer>
                        <PersonContainer>
                            <GlobalLabel>Dino Rossi</GlobalLabel>
                            <HyperLinks href="https://www.linkedin.com/in/dinoprossi/">LinkedIn</HyperLinks>
                        </PersonContainer>
                        <PersonContainer>
                            <GlobalLabel>Andras Gombos</GlobalLabel>
                            <HyperLinks href="https://www.linkedin.com/in/andrasgombos/">LinkedIn</HyperLinks>
                        </PersonContainer>

                    </LeftContainer>
                    <SupportContainer>
                        <span>With the Support of:</span>
                        <PersonContainer>
                            <HyperLinks href="https://www.goesfoundation.com/">GOES Foundation</HyperLinks>
                        </PersonContainer>
                        <PersonContainer>
                            <HyperLinks href="https://propulsion.academy/">Propulsion Academy</HyperLinks>
                        </PersonContainer>
                    </SupportContainer>
                </AboutContainer>
            </Main>
            
        </Background>
    </>
}

export default(About)