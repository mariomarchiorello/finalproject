import { Link } from "react-router-dom";
import { Background, BlueButton } from "../../globalstyles/globalStyle";
import Header from "../header";
import { QuoteWrapper, MainHome, Buttonholder, HomeBackground } from "./style";



export default function Home() {

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