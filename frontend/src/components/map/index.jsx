import React from 'react'
import { Background } from '../../globalstyles/globalStyle'
import Header from '../header'
import Map from './map'
import { CenterContainer , Bluebutton } from './style'

export default function MapPage() {
    return (
        <>  
            <Background>
                <Header />
                <div><p>G O E S</p></div>
                <CenterContainer>

                <Map />
                <Bluebutton>Upload</Bluebutton>
                <Bluebutton>Profile</Bluebutton>
                </CenterContainer>
            </Background>


        </>
    )
}
