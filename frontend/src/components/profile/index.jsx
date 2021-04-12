import React from 'react'
import { Link } from 'react-router-dom'
import {Background, Main } from '../../globalstyles/globalStyle'
import Footer from '../footer'
import Header from '../header'
import MyProfile from './self'
import { SelectionContainer } from './style'









export default function Profile() {
    return (
        <>
            <Background>
                <Header/>
                <Main>
                    <SelectionContainer>
                        <Link className='underscored'>Profile</Link>
                        <Link className='underscored'>Completet</Link>
                        <Link className='underscored'>in progress</Link>
                    </SelectionContainer>
                    <MyProfile />


                </Main>
                <Footer/>

            </Background>
            
        </>
    )
}

