import bg1 from "../../assets/background-images/1.jpg"
import bg2 from "../../assets/background-images/2.jpg"
import bg3 from "../../assets/background-images/3.jpg"
import bg4 from "../../assets/background-images/4.jpg"
import bg5 from "../../assets/background-images/5.jpg"
import bg6 from "../../assets/background-images/6.jpg"
import bg7 from "../../assets/background-images/7.jpg"
import bg8 from "../../assets/background-images/8.jpg"
import bg9 from "../../assets/background-images/9.jpg"
import bg10 from "../../assets/background-images/10.jpg"
import bg11 from "../../assets/background-images/valdiviella-insignis.jpg"
import bg12 from "../../assets/background-images/yellow-oval.jpg"
import { Background } from "../../globalstyles/globalStyle"
import Header from "../header"
import Home from "../home"
import { QuoteWrapper } from "../home/style"

const DynamicBackground = () => {

    const backgroundArray = [bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8, bg9, bg10, bg11, bg12];
    const randomIndex = Math.floor(Math.random() * backgroundArray.length);
    const selectedBackground = backgroundArray[randomIndex];
    

     const background = {
        backgroundImage: `url(${selectedBackground})`,
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        // opacity: "0.5",
        }

    return <>
        
        <Background className="bg" style={background}>
           
        </Background>
    </>
    
};

export default (DynamicBackground)