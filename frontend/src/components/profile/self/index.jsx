import React from 'react'
import ButtonSection from './buttonSection'
import EditPasswordSection from './editPassword'
import EditProfileSection from './editProfile'
import InfoSection from './info'
import { ProfileCenterContainer } from './style'

export default function MyProfile() {
    return (
        <>
            <ProfileCenterContainer>
                <InfoSection></InfoSection>
                <EditProfileSection></EditProfileSection>
                <EditPasswordSection></EditPasswordSection>
                <ButtonSection></ButtonSection>

            </ProfileCenterContainer>
            
        </>
    )
}
