import React from 'react'
import { Link } from 'react-router-dom'
import {Background, Main } from '../../globalstyles/globalStyle'
import Footer from '../footer'
import Header from '../header'
import MyProfile from './self'
import { SelectionContainer } from './style'









export default function Profile() {

    
    const selectHandler = value => {
        console.log(value);
        return value;
    }


    return (
        <>
            <Background>
                <Header/>
                <Main>
                    <SelectionContainer>
                        <Link className='underscored'
                         onClick={()=>selectHandler("userProfile")}
                        >Profile</Link>
                        <Link className='underscored'
                         onClick={()=>selectHandler("completed")}
                        >Completet</Link>
                        <Link className='underscored'
                         onClick={()=>selectHandler("inProgress")}
                        >in progress</Link>
                    </SelectionContainer>
                    { selectHandler==="userProfile" ? <MyProfile /> : null}
                    


                </Main>
                <Footer/>

            </Background>
            
        </>
    )
}

