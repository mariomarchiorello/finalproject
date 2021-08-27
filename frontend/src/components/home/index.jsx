import {Link, useHistory} from "react-router-dom";
import { BlueButton } from "../../globalstyles/globalStyle";
import Header from "../header";
import { QuoteWrapper, MainHome, Buttonholder, HomeBackground } from "./style";
import {useEffect} from "react";
import {getUserMeAction} from "../../store/actions/getUserMeAction";
//import {getUserSampleAction} from "../../store/actions/getUserSampleSetAction";
import {useDispatch} from "react-redux";



export default function Home() {

    const history = useHistory()
    const dispatch = useDispatch()

    useEffect(()=>{
    dispatch(getUserMeAction(history))
    },[])

    return (
        <>
            <HomeBackground>
                <Header/>
                <MainHome>
                    <QuoteWrapper>
                        <p>Life on earth depends upon healthy Oceans, we have 10 years to stop toxic chemical pollution, or life on earth may become impossible.</p>
                        <p>Dr. Howard Dryden, CSO</p>
                    </QuoteWrapper>
                    <Buttonholder>
                        <Link to="/sign-up"><BlueButton>Join Us!</BlueButton></Link>
                    </Buttonholder>
                </MainHome>
            </HomeBackground>
        </>
    )
};