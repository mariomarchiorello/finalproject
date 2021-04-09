import React from 'react'
import { CenterContainer, Background, Main } from '../../globalstyles/globalStyle'
import Footer from '../footer'
import Header from '../header'
import Map from './map'
import { BackgroundMap, Bluebutton } from './style'

export default function MapPage() {
    return (
        <>  
                <Background>
                    <Header />
                    <Main>
                        <div><p>G O E S</p></div>
                        <BackgroundMap>
                        <Map />
                        <section className="button">
                        <Bluebutton>Upload</Bluebutton>
                        <Bluebutton>Profile</Bluebutton>
                        </section>
                        </BackgroundMap>
                    </Main>
                    <Footer />
                </Background>
                

        </>
    )
}
