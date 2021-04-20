import React, {useEffect} from 'react'
import {Info} from '../self/style'
import {useDispatch, useSelector} from "react-redux";
import {Link, useHistory} from "react-router-dom";
import {CompletedContainer} from "./style";
import {DisplayContainer} from "../style";
import {getAllUserSamples} from "../../../store/actions/getAllMySamplesAction";
// import {getUserMeAction} from "../../../store/actions/getUserSelfAction";


const Completed = () => {

    const history = useHistory()
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getAllUserSamples(history))

    },[])

    const allUserSamples = useSelector(state => state.UserReducer.allMySamples);

    return (



        allUserSamples.map((element, index)=>{
            if(element.is_completed){

            let totalZooCount = element.images.reduce((currentVal, total)=>currentVal + total.zooplankton, 0);
            let totalPhytoCount = element.images.reduce((currentVal, total)=>currentVal + total.phytoplankton, 0);
            let sampleImageArray = element.images.map(pic=>pic.original_image)
                // console.log(sampleImageArray)
            return (
            <CompletedContainer key={index} >
                <section className='left'>
                    <div>
                <p> Sample ID: {element.id}</p>
                <p>Collection Date: {element.collection_date}</p>
                    </div>
                    <div>
                <p>Latitude: {element.sample_latitude}</p>
                <p>Longitude: {element.sample_longitude}</p>
                    </div>
                    <div>
                <p>Total Zooplankton: {totalZooCount}</p>
                <p>Total Phytoplankton: {totalPhytoCount}</p>
                    </div>
                </section>
                <section className='right'>
                    {sampleImageArray.map(image=> <img src={image} alt="sample Image"/>)}

                </section>
            </CompletedContainer>
            )
            }
        })
    )
}
export default(Completed)
