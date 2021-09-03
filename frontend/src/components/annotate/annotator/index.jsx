import React, {useEffect} from "react";
import ReactImageAnnotate from "react-image-annotate";
import imageTwo from '../../../assets/background-images/plankton.jpg'
import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getUserMeAction} from "../../../store/actions/getUserMeAction";
import {getAllUserSamples} from "../../../store/actions/getAllMySamplesAction";



const Annotator = () => {


    const history = useHistory();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllUserSamples(history));
        dispatch(getUserMeAction(history))

    },[]);

    const currentSampelSet = useSelector((state) => state.UserReducer.allMySamples[`${state.UserReducer.allMySamples.length - 1}`]);
    console.log(" currentsampleset",currentSampelSet);

    const image = currentSampelSet

    console.log("test image1", image)
   return(
  <ReactImageAnnotate
    labelImages
    enabledTools={["select", "create-point", "create-box"]}
    regionClsList={["Zoo Plankton", "Phyto Plankton", "Micro-Plastics", "Micro-Fibers"]}
    images={[
      /*{
        src: currentSampelSet.images[0].original_image ,
        name: "Image 1",
        regions: []
      }, */
      {
        src: imageTwo,
        name: "Image 2",
        regions: []
      }
    ]}
  />
)
};

export default Annotator;

