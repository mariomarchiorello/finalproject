import React from 'react'
import { Link } from 'react-router-dom'
import {Background, Main } from '../../globalstyles/globalStyle'
import Footer from '../footer'
import Header from '../header'
import MyProfile from './self'
import { SelectionContainer } from './style'
// import { useDispatch, useSelector} from 'react-redux'








export default function Profile() {


    let sectionToRender = "0"
    const selectHandler = (e) => {
        return sectionToRender = e
    }

    return (
        <>
            <Background> 
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

