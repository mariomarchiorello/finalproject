import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import L from 'leaflet';
import icon from '../../assets/graphics/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import home from '../../assets/graphics/black-position-icon.png';

let sampleIcon = L.icon({
    iconUrl: icon,
    //shadowUrl: iconShadow,
    iconSize: [20, 20],
    iconAnchor: [0, 26], //[left/right, top/bottom]
    popupAnchor: [0, -46], //[left/right, top/bottom]
});
L.Marker.prototype.options.icon = sampleIcon;

let homeIcon = L.icon({
    iconUrl: home,
    shadowUrl: iconShadow,
    iconSize: [20, 20],
    iconAnchor: [0, 26], //[left/right, top/bottom]
    popupAnchor: [0, -46], //[left/right, top/bottom]
});
L.Marker.prototype.options.home = homeIcon;

// currently the positions are hardcoded, in the future they will be fetchen from the DB
const samplePositions = [[73.65,-21.75],[58.485,48.583],[654.652,90.000],[83.710,10.12]];
const homePositions = [[47.400520, 8.494140],[33.981140, -81.242119],[-17.97086,-169.325]];
const center= [10, -2];

export default function Map() {

    return (
        <> 
            <MapContainer style={{ height: '100%', width: '100%'}} center={center} zoom={2} minZoom={1} scrollWheelZoom={false} >
                
                <TileLayer attribution='&copy; <a href="https://about.google/brand-resource-center/products-and-services/geo-guidelines/#google-earth">GoogleMaps</a> Data 2021' url='http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'/>

                {
                    samplePositions.map(position => <Marker position={position} icon={sampleIcon}><Popup>fetch the date <br /> and the name of the vessel if known.</Popup></Marker> )
                }

                {
                    homePositions.map(position => <Marker position={position} icon={homeIcon}></Marker>)
                }

            </MapContainer>
        </>
    )
}