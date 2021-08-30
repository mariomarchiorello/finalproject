import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Footer from "../footer";
import Header from "../header";
import MyProfile from "./self";
import {BackgroundProfile, DisplayContainer, MainProfile, SelectionContainer} from "./style";
import { useDispatch, useSelector } from "react-redux";
import { getUserMeAction } from "../../store/actions/getUserMeAction";
import Completed from "./completed";
import NotCompleted from "./inProgress/inProgress";


export default function Profile() {

  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserMeAction(history));
  },[]);

/*------------------function to decide which section will be rendered------------------------------------*/
  const profileMainChoice = (value) => {
    dispatch({ type: "PROFILE-MAIN-HANDLER", payload: value });
  };
/*------------------variable to retrieve the result of the above function from the redux store-----------*/
  const profileMainAction = useSelector(
    (state) => state.UserReducer.profileMainSection
  );


  return (
    <>
      <BackgroundProfile>
        <Header />
        <MainProfile>
{/*
-----------------MENU BAR WITH "PROFILE     COMPLETED      IN PROGRESS" ------------------------------------------
*/}
          <SelectionContainer>
            <Link className="underscored"
                  style={ profileMainAction === "profile" ? { borderBottom: "3px solid #30ADEA" } : null}
                  onClick={() => profileMainChoice("profile")}>Profile</Link>
            <Link className="underscored"
                  style={ profileMainAction === "completed" ? { borderBottom: "3px solid #30ADEA" } : null}
                  onClick={() => profileMainChoice("completed")}>Completed</Link>
            <Link className="underscored"
                  style={profileMainAction === "incomplete" ? { borderBottom: "3px solid #30ADEA" } : null}
                  onClick={() => profileMainChoice("incomplete")}>In Progress</Link>
          </SelectionContainer>
{/*---------------- AREA TO RENDER WHAT HAS BEEN SELECTED IN THE ABOVE----------------------------------------------*/}

          {profileMainAction === "profile" ? <MyProfile /> : null}
          {profileMainAction === "completed" ? (<DisplayContainer> <Completed /> </DisplayContainer>) : null}
          {profileMainAction === "incomplete" ? (<DisplayContainer> <NotCompleted /> </DisplayContainer>) : null}
        </MainProfile>
        <Footer />
      </BackgroundProfile>
    </>
  );
}
