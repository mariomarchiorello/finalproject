import React, {useState } from "react";
import {GlobalInput, GlobalLabel, SmallBlueButton} from "../../../globalstyles/globalStyle";
import { Edit, EditPasswordButton } from "./style";
import InfoSection from "./info";
import { BottomContainer } from "../style";
import { useDispatch } from "react-redux";
import Toggle from "../../themes/toggle";
import { useDarkMode } from "../../themes/useDarkMode";




const EditProfileSection = () => {

  // const history = useHistory();
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");


  // useEffect(()=>{
  //     dispatch(getUserMeAction(history))
  // },[])

  // const userSelf = useSelector((state) => state.UserReducer.userMe);
  // console.log(userSelf)
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [home_latitude, setHomeLat] = useState("");
  const [home_longitude, setHomeLon] = useState("");
  const [vessel_name, setVessel] = useState("");

  const editProfileHandler = (e) => {
    e.preventDefault();

    const editProfileCredentials = {
      email: email,
      username: username,
      first_name: first_name,
      last_name: last_name,
      home_latitude: home_latitude,
      home_longitude: home_longitude,
      vessel_name: vessel_name,
    };


    const config = {
      method: "PATCH",
      body: JSON.stringify(editProfileCredentials),
      headers: new Headers({
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      }),
    };
    fetch("http://localhost:8000/backend/api/users/me/", config)
      .then((res) => res.json())
      .then((data) => {
        profileHandler("info")
      });
  };

  const profileHandler = (value) => {
    dispatch({ type: "PROFILE-EDIT-HANDLER", payload: value });
  };

  const [theme, toggleTheme] = useDarkMode();

  return (
    <>
      <InfoSection />
      <form>
        <Edit>
          <section className="right">
            <GlobalLabel htmlFor="username">username</GlobalLabel>
            <GlobalInput
              required
              type="text"
              name="username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />

            <GlobalLabel htmlFor="email">email</GlobalLabel>
            <GlobalInput
              required
              type="text"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />

            <GlobalLabel htmlFor="first">first name</GlobalLabel>
            <GlobalInput
              type="text"
              name="first"
              value={first_name}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />

            <GlobalLabel htmlFor="last">last name</GlobalLabel>
            <GlobalInput
              type="text"
              name="last"
              value={last_name}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </section>
          <section className="right">
            <GlobalLabel htmlFor="homeLat">latitude</GlobalLabel>
            <GlobalInput
              type="text"
              name="homelat"
              value={home_latitude}
              onChange={(e) => {
                setHomeLat(e.target.value);
              }}
            />
            <GlobalLabel htmlFor="homeLon">longitude</GlobalLabel>
            <GlobalInput
              type="text"
              name="homelon"
              value={home_longitude}
              onChange={(e) => {
                setHomeLon(e.target.value);
              }}
            />
            <GlobalLabel htmlFor="vessel">vessel</GlobalLabel>
            <GlobalInput
              type="text"
              name="vessel"
              value={vessel_name}
              onChange={(e) => {
                setVessel(e.target.value);
              }}
            />
            <GlobalLabel forHtml="theme">Switch to Light Theme</GlobalLabel>
            <Toggle theme={theme} toggleTheme={toggleTheme}></Toggle>
          </section>
        </Edit>
        <BottomContainer>
          <EditPasswordButton onClick={() => profileHandler("changePassword")}>
            Change Password
          </EditPasswordButton>
          <SmallBlueButton onClick={() => profileHandler("info")}>
            {" "}
            Go Back
          </SmallBlueButton>
          <SmallBlueButton onClick={editProfileHandler}>Save</SmallBlueButton>
        </BottomContainer>
      </form>
    </>
  );
};
export default EditProfileSection;
