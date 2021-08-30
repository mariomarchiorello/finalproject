import React, {useEffect} from 'react';
import {BackgroundProfile} from "../../profile/style";
import Header from "../../header";
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import {getUserMeAction} from "../../../store/actions/getUserMeAction";
import {BackgroundIncomplete} from "../style";
import Completed from "../../profile/completed";

function ShowCompletedSamples() {

  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserMeAction(history));
  },[]);


    return (

            <BackgroundProfile>
                <Header/>
                <BackgroundIncomplete>
                    <Completed/>
                </BackgroundIncomplete>
            </BackgroundProfile>


    );
}


export default ShowCompletedSamples;