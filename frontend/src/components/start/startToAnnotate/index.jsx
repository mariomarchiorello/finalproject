import React, {useEffect} from 'react';
import {BackgroundProfile, DisplayContainer} from "../../profile/style";
import Header from "../../header";
import NotCompleted from "../../profile/inProgress/inProgress";
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import {getUserMeAction} from "../../../store/actions/getUserMeAction";
import {BackgroundIncomplete} from "../style";

function ShowIncompleteSamples() {

  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserMeAction(history));
  },[]);


    return (

            <BackgroundProfile>
                <Header/>
                <BackgroundIncomplete>
                    <NotCompleted/>
                </BackgroundIncomplete>
            </BackgroundProfile>


    );
}


export default ShowIncompleteSamples;