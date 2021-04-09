import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import L from 'leaflet';
import icon from '../../assets/graphics/red-circle-icon.png';
import home from '../../assets/graphics/home-icon.png';
import { Box } from './style';
import ship from '../../assets/graphics/red-ship-icon.png';


let sampleIcon = L.icon({
    iconUrl: icon,
    iconSize: [10, 10],
    iconAnchor: [0, 26], //[left/right, top/bottom]
    popupAnchor: [0, -46], //[left/right, top/bottom]
});
L.Marker.prototype.options.icon = sampleIcon;

let homeIcon = L.icon({
    iconUrl: home,
    iconSize: [15, 10],
    iconAnchor: [5, 5], //[left/right, top/bottom]
    popupAnchor: [0, -46], //[left/right, top/bottom]
});
L.Marker.prototype.options.home = homeIcon;

let shipIcon = L.icon({
    iconUrl: ship,
    iconSize: [15, 10],
    iconAnchor: [5, 5], //[left/right, top/bottom]
    popupAnchor: [0, -46], //[left/right, top/bottom]
});
L.Marker.prototype.options.ship = shipIcon;

// currently the positions are hardcoded, in the future they will be fetchen from the DB
const samplePositions = [[73.65,-21.75],[5.485,165.583],[35.652,-40.000],[23.710,-60.12],[16.485,-24.583],[2.652,60.000],[-40.710,-10.12]];
const shipPositions = [[43.65,-21.75],[1.485,155.583],[25.652,-46.000],[20.710,-75.12],[5.485,-18.583],[-20.652,65.000],[-20.710,-35.12]];
const homePositions = [[47.400520, 8.494140],[33.981140, -81.242119],[-17.97086,-70.325]];
const center= [10, -2];

export default function Map() {

    return (
        <> 
            <Box> 
            <MapContainer style={{ height: '100%', width: '100%'}} center={center} zoom={2} minZoom={1} scrollWheelZoom={false} >
                
                <TileLayer attribution='&copy; <a href="https://about.google/brand-resource-center/products-and-services/geo-guidelines/#google-earth">GoogleMaps</a> Data 2021' url='http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'/>

                {
                    samplePositions.map(position => <Marker position={position} icon={sampleIcon}><Popup>fetch the date <br /> and the name of the vessel if known.</Popup></Marker> )
                }

{
                    shipPositions.map(position => <Marker position={position} icon={shipIcon}><Popup>fetch the date <br /> and the name of the vessel if known.</Popup></Marker> )
                }

                {
                    homePositions.map(position => <Marker position={position} icon={homeIcon}></Marker>)
                }

            </MapContainer>
            </Box>
        </>
    )
}