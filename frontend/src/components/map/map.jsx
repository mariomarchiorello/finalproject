import React, {useEffect} from 'react'
import { MapContainer, TileLayer, Popup, CircleMarker} from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import { Box } from './style'
import {useDispatch, useSelector} from 'react-redux'
import {useHistory} from "react-router-dom"
import {getAllLocationsAction} from "../../store/actions/getAllLocationsAction"


const center= [10, -2];


export default function Map() {

    const history = useHistory()
    const dispatch = useDispatch()

    useEffect(()=>{
    dispatch(getAllLocationsAction(history))
    },[])

    const locationsArray = useSelector(state => state.locationReducer.allLocations)
    const userSelfId = useSelector(state => state.UserReducer.userMe.id)
    const allPos = locationsArray.map((value) => [[value.sample_latitude, value.sample_longitude], value.id, value.collection_date, value.total_phytoplankton, value.total_zooplankton, value.submitted_by.id])


    return (
        <> 
            <Box> 
            <MapContainer style={{ height: '100%', width: '100%', borderRadius: "10px"}} center={center} zoom={2} minZoom={1} scrollWheelZoom={false} >
                <TileLayer attribution='&copy; <a href="https://about.google/brand-resource-center/products-and-services/geo-guidelines/#google-earth">GoogleMaps</a> Data 2021' url='http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'/>

                {/*{
                    allPos
                        .filter(sample => sample[5] === userSelfId)
                        .map(position =>
                        <CircleMarker center={position[0]} radius={4 * (1 + ((position[3] + position[4]) / 30))} color={'green'} weight={1} fillOpacity={0.1} >
                            <Popup>
                                {`Sample Id: ${position[1]}`}<br/>
                                {`Sample Date: ${position[2]}`}<br/>
                                {`Phytoplankton: ${position[3]}`}<br/>
                                {`Zooplankton: ${position[4]}`}
                            </Popup>
                        </CircleMarker> )
                }

                {
                    allPos
                        .filter(sample => sample[5] !== userSelfId)
                        .map(position =>
                        <CircleMarker center={position[0]} radius={4 * (1 + ((position[3] + position[4]) / 30))} color={'red'} weight={1} fillOpacity={0.1} >
                            <Popup>
                                {`Sample Id: ${position[1]}`}<br/>
                                {`Sample Date: ${position[2]}`}<br/>
                                {`Phytoplankton: ${position[3]}`}<br/>
                                {`Zooplankton: ${position[4]}`}
                            </Popup>
                        </CircleMarker> )
                }*/}

            </MapContainer>
            </Box>
        </>
    )
}
