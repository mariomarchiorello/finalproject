import { Background } from "../../globalstyles/globalStyle";
import Header from "../header";
import { QuoteWrapper, MainHome } from "./style";



export default function Home() {

    return (
        <>
            <Background>
                <Header/>
                <MainHome>
                    <QuoteWrapper>
                        <p>Life on earth depends upon healthy Oceans, we have 10 years to stop toxic chemical pollution, or life on earth may become impossible.</p>
                        <p>Dr. Howard Dryden, CSO</p>
                    </QuoteWrapper>
                </MainHome>
            </Background>
        </>
    )
};