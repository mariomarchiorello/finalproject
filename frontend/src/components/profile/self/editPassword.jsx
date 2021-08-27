import React, { useState } from "react";
import InfoSection from "./info";
import { Edit } from "./style";
import {GlobalInput, GlobalLabel, SmallBlueButton} from "../../../globalstyles/globalStyle";
import { useHistory } from "react-router-dom";
import { BottomContainer } from "../style";
import { useDispatch } from "react-redux";
import baseUrl from "../../../helpers/baseUrl";

export default function EditPasswordSection() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [regEmail, setEmail] = useState("");

  const registrationHandler = (e) => {
    e.preventDefault();
    const credentials = {
      email: regEmail,
    };

    const url = `${baseUrl}auth/password-reset/`;
    const regConfig = {
      method: "POST",
      body: JSON.stringify(credentials),
      headers: { "Content-Type": "application/json" },
    };
    fetch(url, regConfig)
      .then((result) => result.json())
      .then((data) => {
        // console.log(data);
      });
    history.push("/resetTwo");
  };
  const profileHandler = (value) => {
    dispatch({ type: "PROFILE-EDIT-HANDLER", payload: value });
  };

  return (
    <>
      <InfoSection />
      <Edit>
        <p className="reset">
          To reset your password, please enter your E-Mail address. <br />
          We will send you a new registration code
        </p>
        <section className="right">
          <GlobalLabel htmlFor="email">email</GlobalLabel>
          <GlobalInput
            type="text"
            name="email"
            value={regEmail}
            onChange={(e) => setEmail(e.target.value)}
          />
        </section>
      </Edit>
      <BottomContainer>
        <SmallBlueButton onClick={registrationHandler}>
          Reset Password
        </SmallBlueButton>
        <SmallBlueButton onClick={() => profileHandler("editProfile")}>
          Back
        </SmallBlueButton>
      </BottomContainer>
    </>
  );
}
