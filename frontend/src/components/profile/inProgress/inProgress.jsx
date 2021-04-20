import React, {useEffect} from 'react'
import {Info} from '../self/style'
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {CompletedContainer} from "../completed/style";
import {getAllUserSamples} from "../../../store/actions/getAllMySamplesAction";
// import {DisplayContainer} from "../style";
// import {getUserMeAction} from "../../../store/actions/getUserSelfAction";


const NotCompleted = () => {

    const history = useHistory()
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getAllUserSamples(history))

    },[])

    const allUserSamples = useSelector(state => state.UserReducer.allMySamples);
    // console.log("IN the component", allUserSamples)

    const continueAnnotating = (id) => {
        localStorage.setItem('sample_id', id)
        history.push('/annotate-dusko')
    }

    return (



        allUserSamples.map((element, index)=>{
            if(!element.is_completed){
            // console.log("IMAGES FROM NOT COMPLETED", element.images)
            let totalZooCount = element.images.reduce((currentVal, total)=>currentVal + total.zooplankton, 0);
            let totalPhytoCount = element.images.reduce((currentVal, total)=>currentVal + total.phytoplankton, 0);
            let sampleImageArray = element.images.map(pic=>pic.original_image)
                // console.log(sampleImageArray)

            return (
            <CompletedContainer onClick={() => continueAnnotating(element.id)} key={index}>
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
            )}
        })







    )
}
export default(NotCompleted)
