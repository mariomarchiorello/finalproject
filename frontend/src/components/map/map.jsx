import React from 'react'
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import { Box } from './style';
import { sampleAllIcon, sampleMeIcon,shipMeIcon, shipAllIcon, homeMeIcon, homeAllIcon } from './mapIcons';
import {useSelector} from 'react-redux';





// currently the positions are hardcoded, in the future they will be fetchen from the DB
const sampleMePositions = [[54.65,-18.75],[-16.710,-25.12]];
const sampleAllPositions = [[52.65,-29.75],[5.485,165.583],[35.652,-40.000],[23.710,-60.12],[16.485,-24.583],[2.652,60.000],[-40.710,-10.12]];
const shipMePositions = [[39.710,3.12]];
const shipAllPositions = [[43.65,-21.75],[1.485,155.583],[25.652,-46.000],[20.710,-75.12],[5.485,-18.583],[-20.652,65.000],[-20.710,-35.12]];
const homeMePositions = [[47.400, 8.49]];
const homeAllPositions = [[33.981140,-81.242119],[-17.97086,-70.325]];
const center= [10, -2];

export default function Map() {

    const userSelf = useSelector(state => state.UserReducer.userMe);
    console.log("in da map", userSelf)


    return (
        <> 
            <Box> 
            <MapContainer style={{ height: '100%', width: '100%'}} center={center} zoom={2} minZoom={1} scrollWheelZoom={false} >
                
                <TileLayer attribution='&copy; <a href="https://about.google/brand-resource-center/products-and-services/geo-guidelines/#google-earth">GoogleMaps</a> Data 2021' url='http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'/>

                {
                    sampleMePositions.map(position => <Marker position={position} icon={sampleMeIcon}/> )
                }

                {
                    sampleAllPositions.map(position => <Marker position={position} icon={sampleAllIcon}/> )
                } 

                {
                    shipMePositions.map(position => <Marker position={position} icon={shipMeIcon}/> )
                }
                
                {
                    shipAllPositions.map(position => <Marker position={position} icon={shipAllIcon}/>)
                }

                {
                    homeMePositions.map(position => <Marker position={position} icon={homeMeIcon}/> )
                }

                {
                    homeAllPositions.map(position => <Marker position={position} icon={homeAllIcon}/>)
                }

            </MapContainer>
            </Box>
        </>
    )
}