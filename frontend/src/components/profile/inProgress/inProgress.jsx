import React, {useEffect} from 'react'
import {Info} from '../self/style'
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {getUserSampleAction} from "../../../store/actions/getUserSampleSetAction";
import {CompletedContainer} from "../completed/style";
// import {DisplayContainer} from "../style";
// import {getUserMeAction} from "../../../store/actions/getUserSelfAction";


const NotCompleted = () => {

    const history = useHistory()
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getUserSampleAction(history))

    },[])

    const allUserSamples = useSelector(state => state.UserReducer.allMySamples);
    // console.log("IN the component", allUserSamples)

    return (



        allUserSamples.map((element, index)=>{
            if(!element.is_completed){
            console.log("IMAGES FROM NOT COMPLETED", element.images)


            return (
            <CompletedContainer key={index}>
                <p> Sample ID: {element.id}</p>
                <p>Collection Date: {element.collection_date}</p>
                <p>Latitude: {element.sample_latitude}</p>
                <p>Longitude: {element.sample_longitude}</p>


            </CompletedContainer>
            )}
        })







    )
}
export default(NotCompleted)
