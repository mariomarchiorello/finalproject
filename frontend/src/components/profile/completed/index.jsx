import React, {useEffect} from 'react'
import {Info} from '../self/style'
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {getUserSampleAction} from "../../../store/actions/getUserSampleSetAction";
import {CompletedContainer} from "./style";
import {DisplayContainer} from "../style";
// import {getUserMeAction} from "../../../store/actions/getUserSelfAction";


const Completed = () => {

    const history = useHistory()
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getUserSampleAction(history))

    },[])

    const allUserSamples = useSelector(state => state.UserReducer.allMySamples);
    console.log("IN the component", allUserSamples)

    return (



        allUserSamples.map((element, index)=>{
            return (
            <CompletedContainer key={index}>
                <p>{element.id}</p>
            </CompletedContainer>
            )
        })







    )
}
export default(Completed)
