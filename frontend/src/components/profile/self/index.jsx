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


  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getUserMeAction(history));
  });

/*--------in "userSelf" is the information about the logged in user-------------*/
  const userSelf = useSelector((state) => state.UserReducer.userMe);

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
          <InfoSection />
          {/*{profileEdit === "info" ? (
            <BottomContainer>
              <SmallBlueButton onClick={() => profileHandler("editProfile")}>Edit</SmallBlueButton>
            </BottomContainer>
          ) : null}*/}

          <EditProfileSection />

          {/*{profileEdit === "changePassword" ? <EditPasswordSection /> : null}*/}
        </ProfileCenterContainer>
      </div>
    </div>
  );
}
