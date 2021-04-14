import React from 'react'
import EditPasswordSection from './editPassword'
import EditProfileSection from './editProfile'
import InfoSection from './info'
import { ProfileCenterContainer} from './style'
import {SmallBlueButton} from "../../../globalstyles/globalStyle";
import {BottomContainer} from "../style";
import {useDispatch, useSelector} from "react-redux";

export default function MyProfile() {

    const dispatch = useDispatch()

    const profileHandler = value => { dispatch({type:"PROFILE-EDIT-HANDLER",payload:value})}

    const profileEdit = useSelector( state => state.UserReducer.profileEditSection);
    console.log(" from MyProfile" ,profileEdit)



    return (
        <>
            <div>
            <ProfileCenterContainer>
                { profileEdit=== "info" ||profileEdit==="default" ? <InfoSection/> : null }
                { profileEdit=== "info" ||profileEdit==="default" ? <BottomContainer><SmallBlueButton onClick={()=>profileHandler("editProfile")} >Edit</SmallBlueButton></BottomContainer> : null }


                { profileEdit === "editProfile" ? <EditProfileSection/> : null }

                { profileEdit === "changePassword" ? <EditPasswordSection/> : null }



            </ProfileCenterContainer>
            </div>
            
        </>
    )
}
