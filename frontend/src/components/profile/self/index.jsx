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



     const profileEdit = useSelector( state => state.profileEdit.profileEditSection);




    return (
        <>
            <div>
            <ProfileCenterContainer>

                 <InfoSection/>
                    <BottomContainer>
                    <SmallBlueButton onClick={()=>profileHandler("editProfile")} >Edit</SmallBlueButton>
                    </BottomContainer>


                {/*<EditProfileSection/>*/}

                {/*<EditPasswordSection/>*/}



            </ProfileCenterContainer>
            </div>
            
        </>
    )
}
