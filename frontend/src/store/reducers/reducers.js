import { combineReducers } from 'redux';

const initialState = {
    token: '',
    user: [],
    userMe:{},
    profileEditSection:"info",
    profileMainSection:"profile",
}


const UserReducer = (state= initialState, action) => {
    switch(action.type) {
        case'GET_USER_ME':
            console.log("IN DA GET USER ME", action.payload)
            return {...state, userMe: action.payload};
        case 'USER_SIGNIN':
            // THIS IS THE ACTION TRIGERRED AFTER LOGIN, UserMe WILL BE STILL EMPTY THEN
            console.log(" IN DA USER SIGN IN", action.payload)
            return {...state, token: action.payload}
        case 'MENUCOUNTER':
            return {...state, pageId: action.payload}
        case "PROFILE-EDIT-HANDLER":
            return {...state, profileEditSection: action.payload}
        case "PROFILE-MAIN-HANDLER":
            return {...state, profileMainSection: action.payload}
        default:
            return state;
    }
}

export const rootReducer = combineReducers({
    UserReducer
});
