import React, {useEffect} from 'react'
import {Info} from './style'
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {getUserMeAction} from "../../../store/actions/getUserSelfAction";


const InfoSection = () => {

    const history = useHistory()
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getUserMeAction(history))

    },[])

    const userSelf = useSelector(state => state.UserReducer.userMe);


    return (
        <>
            <Info>
                <section className='right'>
                    <div>
                        <p className='type'>Username</p>
                        <p className='value'>{userSelf.username}</p>
                    </div>
                    <div>
                        <p className='type'>First Name</p>
                        <p className='value'>{userSelf.first_name}</p>
                    </div>
                    <div>
                        <p className='type'>Home Latitude</p>
                        <p className='value'>{userSelf.home_latitude}</p>
                    </div>
                    <div>
                        <p className='type'>Vessel</p>
                        <p className='value'>{userSelf.vessel_name}</p>
                    </div>
                </section>

                <section className='left'>
                    <div>
                        <p className='type'>Email</p>
                        <p className='value'>{userSelf.email}</p>
                    </div>
                    <div>
                        <p className='type'>Last Name</p>
                        <p className='value'>{userSelf.last_name}</p>
                    </div>
                    <div>
                        <p className='type'>Home Longitude</p>
                        <p className='value'>{userSelf.home_longitude}</p>
                    </div>
                </section>
            </Info>
        </>
    )
}
export default(InfoSection)
