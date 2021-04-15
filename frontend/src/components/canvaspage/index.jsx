import React, {useEffect} from 'react';
import {Background, CenterContainer, Main} from "../../globalstyles/globalStyle";
import {useHistory} from "react-router-dom";
import {getUserMeAction} from "../../store/actions/getUserSelfAction";
import {useDispatch, useSelector} from "react-redux";
import Header from "../header";
import Footer from "../footer";
import CanvasContainer from "../canvasContainer/index";

const CanvasPage=()=>{
    const history = useHistory()
    const dispatch = useDispatch()

    useEffect(()=>{
    dispatch(getUserMeAction(history))

    },[])

    const userSelf = useSelector(state => state.UserReducer.userMe);
    // console.log("from inside the infosection:",userSelf)


        return (
            <>
                <Background>
                    <Header/>
                    <Main>
                        <CenterContainer>
                            <CanvasContainer />

                        </CenterContainer>

                    </Main>
                    <Footer/>

                </Background>
            </>
        );
}

export default(CanvasPage);