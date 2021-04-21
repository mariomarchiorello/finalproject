import React, {useEffect} from 'react'
import { MapContainer, TileLayer, Marker , Popup, CircleMarker} from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import { Box } from './style';
import { sampleAllIcon, sampleMeIcon,shipMeIcon, shipAllIcon, homeMeIcon, homeAllIcon } from './mapIcons';
import {useDispatch, useSelector} from 'react-redux';
import baseUrl from '../../helpers/baseUrl'
import {useHistory} from "react-router-dom";
import {getUserMeAction} from "../../store/actions/getUserSelfAction";
import {getAllLocationsAction} from "../../store/actions/getAllLocationsAction";




// currently the positions are hardcoded, in the future they will be fetched from the DB
// const sampleMePositions = [[54.65,-18.75],[-16.710,-25.12]];
// const shipMePositions = [[39.710,3.12]];
// const shipAllPositions = [[43.65,-21.75],[1.485,155.583],[25.652,-46.000],[20.710,-75.12],[5.485,-18.583],[-20.652,65.000],[-20.710,-35.12]];
// const homeAllPositions = [[33.981140,-81.242119],[-17.97086,-70.325]];
const center= [10, -2];

export default function Map() {
//-----------user home pos--------------------------------------------------------------------
    const userSelf = useSelector(state => state.UserReducer.userMe);


    // const myPos=[[parseInt(userSelf.home_latitude),parseInt(userSelf.home_longitude)]];


    const history = useHistory()
    const dispatch = useDispatch()

    useEffect(()=>{
    dispatch(getAllLocationsAction(history))
    },[])
    const locationsArray = useSelector(state => state.locationReducer.allLocations)

    const allPos = locationsArray.map((value) => [[value.sample_latitude, value.sample_longitude], value.id, value.collection_date, value.total_phytoplankton, value.total_zooplankton])

    return (
        <> 
            <Box> 
            <MapContainer style={{ height: '100%', width: '100%', borderRadius: "10px"}} center={center} zoom={2} minZoom={1} scrollWheelZoom={false} >
                
                <TileLayer attribution='&copy; <a href="https://about.google/brand-resource-center/products-and-services/geo-guidelines/#google-earth">GoogleMaps</a> Data 2021' url='http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'/>

                {/*{*/}
                {/*    sampleMePositions.map(position => <Marker position={position} icon={sampleMeIcon}/> )*/}
                {/*}*/}

                {
                    allPos.map(position =>
                        <CircleMarker center={position[0]} radius={4 * (1 + ((position[3] + position[4]) / 30))} color={'red'} weight={1} fillOpacity={0.1} >
                            <Popup>
                                {`Sample Id: ${position[1]}`}<br/>
                                {`Sample Date: ${position[2]}`}<br/>
                                {`Phytoplankton: ${position[3]}`}<br/>
                                {`Zooplankton: ${position[4]}`}
                            </Popup>
                        </CircleMarker> )
                }

                {/*{*/}
                {/*    shipMePositions.map(position => <Marker position={position} icon={shipMeIcon}/> )*/}
                {/*}*/}
                
                {/*{*/}
                {/*    shipAllPositions.map(position => <Marker position={position} icon={shipAllIcon}/>)*/}
                {/*}*/}

                {/*{*/}
                {/*    myPos.map(position => <Marker position={position} icon={homeMeIcon}/> )*/}
                {/*}*/}

                {/*{*/}
                {/*    homeAllPositions.map(position => <Marker position={position} icon={homeAllIcon}/>)*/}
                {/*}*/}

            </MapContainer>
            </Box>
        </>
    )
}