import { combineReducers } from "redux";
import { annotationReducer } from "./annotationReducer";
import { locationReducer} from "./locationReducer";

const initialState = {
  token: "",
  user: [],
  userMe: {},
  profileEditSection: "info",
  profileMainSection: "home",
  allMySamples: [],

};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER_ME":
      //console.log("IN DA GET USER ME", action.payload);
      return { ...state, userMe: action.payload };
    case "USER_SIGNIN":
      // THIS IS THE ACTION TRIGERRED AFTER LOGIN, UserMe WILL BE STILL EMPTY THEN
      //console.log(" IN DA USER SIGN IN", action.payload);
      return { ...state, token: action.payload };
    case "MENUCOUNTER":
      return { ...state, pageId: action.payload };
    case "PROFILE-EDIT-HANDLER":
      return { ...state, profileEditSection: action.payload };
    case "PROFILE-MAIN-HANDLER":
      return { ...state, profileMainSection: action.payload };
    case "HEADER_TO_PROFILE_ACTION":
      return {
        ...state,
        profileMainSection: action.payload[1],
        profileEditSection: action.payload[0],
      };
    case "TOGGLE_THEME":
      return { ...state, ThemeEnabled: !state.ThemeEnabled
      };
    case "ALL_MY_SAMPLES":
      // console.log("FROM IN DA REDUCER:", action.payload)
      return {...state, allMySamples: action.payload
      };

    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  UserReducer,
  annotationReducer,
  locationReducer,
});
