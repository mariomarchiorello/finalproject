import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
// import {Background, Main } from '../../globalstyles/globalStyle'
import Footer from '../footer'
import Header from '../header'
import MyProfile from './self'
import {BackgroundProfile, MainProfile, SelectionContainer} from './style'
// import { useDispatch, useSelector} from 'react-redux'
import bg1 from "../../assets/background-images/5.jpg"
import bg2 from "../../assets/background-images/8.jpg"
import bg3 from "../../assets/background-images/2.jpg"
import bg4 from "../../assets/background-images/1.jpg"
import bg5 from "../../assets/background-images/10.jpg"
import {useDispatch} from "react-redux";



export default function Profile() {

    const dispatch = useDispatch()
    const [userSelf, setUserSelf] = useState({})
    useEffect(() => {


        const token = localStorage.getItem('token');
        const config = {
            method: "GET",
            headers: new Headers ({
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            })
        }

        fetch("https://goes-app.propulsion-learn.ch/backend/api/users/me/", config)
        .then(res => res.json())
        .then(data => {
            setUserSelf(data);
            console.log("from inside the effect-fetch", data);
            const action = {
                type: 'GET_USER_ME',
                payload: data
            }
            dispatch(action)


        })

    }, []);

    console.log("from inside useEffect", userSelf)






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
            <BackgroundProfile style={background}>
                <Header userSelf ={userSelf}/>
                <MainProfile>
                    <SelectionContainer>
                        <Link className='underscored'
                         onClick={()=>selectHandler("0")}
                        >Profile</Link>
                        <Link className='underscored'
                         onClick={()=>selectHandler("1")}
                        >Completed</Link>
                        <Link className='underscored'
                         onClick={()=>selectHandler("2")}
                        >in progress</Link>
                    </SelectionContainer>
                    {sectionToRender === "0" ? <MyProfile userSelf ={userSelf}/> : null}
                    


                </MainProfile>
                <Footer/>

            </BackgroundProfile>
            
        </>
    )
}

