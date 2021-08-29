import React, { useEffect } from "react";
import EditPasswordSection from "./editPassword";
import EditProfileSection from "./editProfile";
import InfoSection from "./info";
import { ProfileCenterContainer } from "./style";
import { SmallBlueButton } from "../../../globalstyles/globalStyle";
import { BottomContainer } from "../style";
import { useDispatch, useSelector } from "react-redux";
import { getUserMeAction } from "../../../store/actions/getUserMeAction";
import { useHistory } from "react-router-dom";

export default function MyProfile() {
  const history = useHistory();
  useEffect(() => {
    dispatch(getUserMeAction(history));
  });

  // const userSelf = useSelector((state) => state.UserReducer.userMe);

  const dispatch = useDispatch();

  const profileHandler = (value) => {
    dispatch({ type: "PROFILE-EDIT-HANDLER", payload: value });
  };

  const profileEdit = useSelector(
    (state) => state.UserReducer.profileEditSection
  );

  return (
    <div>
      <div>
        <ProfileCenterContainer>
          {profileEdit === "info" ? <InfoSection /> : null}
          {profileEdit === "info" ? (
            <BottomContainer>
              <SmallBlueButton onClick={() => profileHandler("editProfile")}>Edit</SmallBlueButton>
            </BottomContainer>
          ) : null}

          {profileEdit === "editProfile" ? <EditProfileSection /> : null}

          {profileEdit === "changePassword" ? <EditPasswordSection /> : null}
        </ProfileCenterContainer>
      </div>
    </div>
  );
}
