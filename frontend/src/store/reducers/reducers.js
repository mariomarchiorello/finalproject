import { combineReducers } from 'redux';

const initialState = {
    token: '',
    user: [],
    userMe:{},
    profileEditSection:"info",
}


const UserReducer = (state= initialState, action) => {
    switch(action.type) {
        case'GET_USER_ME':
            console.log("IN DA REDUCER", action.payload)
            return {...state, userMe: action.payload};
        case 'USER_SIGNIN':
            // THIS IS THE ACTION TRIGERRED AFTER LOGIN, UserMe WILL BE STILL EMPTY THEN
            return {...state, token: action.payload.token}
        case 'MENUCOUNTER':
            return {...state, pageId: action.payload}
        case "PROFILE-EDIT-HANDLER":
            return {...state, profileEditSection: action.payload}
        default:
            return state;
    }
}

export const rootReducer = combineReducers({
    UserReducer
});
