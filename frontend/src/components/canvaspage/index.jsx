import React, {useEffect} from 'react';
import {Background, CenterContainer, Main} from "../../globalstyles/globalStyle";
import {useHistory} from "react-router-dom";
import {getUserMeAction} from "../../store/actions/getUserSelfAction";
import {useDispatch, useSelector} from "react-redux";
import Header from "../header";
import Footer from "../footer";
import {CanvasProvider} from "../canvasContainer/CanvasContext";
import CanvasContainer from "../canvasContainer";

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
                            <CanvasProvider>
                                <CanvasContainer/>
                            </CanvasProvider>

                        </CenterContainer>

                    </Main>
                    <Footer/>

                </Background>
            </>
        );
}

export default(CanvasPage);