import React from 'react'
import { Link } from 'react-router-dom'
import {Background, Main } from '../../globalstyles/globalStyle'
import Footer from '../footer'
import Header from '../header'
import MyProfile from './self'
import { SelectionContainer } from './style'
// import { useDispatch, useSelector} from 'react-redux'
import bg1 from "../../assets/background-images/5.jpg"
import bg2 from "../../assets/background-images/8.jpg"
import bg3 from "../../assets/background-images/2.jpg"
import bg4 from "../../assets/background-images/1.jpg"
import bg5 from "../../assets/background-images/10.jpg"



export default function Profile() {


    let sectionToRender = "0"
    const selectHandler = (e) => {
        return sectionToRender = e
    }

    const backgroundArray = [bg1, bg2, bg3, bg4, bg5];
    const randomIndex = Math.floor(Math.random() * backgroundArray.length);
    const selectedBackground = backgroundArray[randomIndex];

    const background = {
        backgroundImage: `url(${selectedBackground})`,
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        };

    return (
        <>
            <Background style={background}> 
                <Header/>
                <Main>
                    <SelectionContainer>
                        <Link className='underscored'
                         onClick={()=>selectHandler("0")}
                        >Profile</Link>
                        <Link className='underscored'
                         onClick={()=>selectHandler("1")}
                        >Completet</Link>
                        <Link className='underscored'
                         onClick={()=>selectHandler("2")}
                        >in progress</Link>
                    </SelectionContainer>
                    {sectionToRender === "0" ? <MyProfile /> : null}
                    


                </Main>
                <Footer/>

            </Background>
            
        </>
    )
}

