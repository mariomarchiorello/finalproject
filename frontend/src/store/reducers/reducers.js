import { combineReducers } from 'redux';

const initialState = {
    token: '',
    user: [],
    self:[],

}


const getSelfReducer = (state= initialState, action) => {
    if(action.type === 'GET_USER_ME'){
        return {...state, self: action.payload}
    }
    return state
}

const signInReducer = (state = initialState, action) => {
    
    if(action.type === 'SIGNIN'){
        return {...state, token: action.payload.token, user: action.payload.userInfo}
    }
    return state
}

const menuCountAction = (state= {pageId:"0"}, action) => {
    if(action.type === 'MENUCOUNTER'){
        return {...state, pageId: action.payload}
    }
    return state
}
//--------------------- used to render profile edit components-----------------
/*const profileEditReducer = (state = {profileEditSection: "info"}, action) => {
    if (action.type === "PROFILE-EDIT-HANDLER"){
        return {...state, profileEditSection: action.payload}
    }
}*/




export const rootReducer = combineReducers({
    getSelfReducer,
    signInReducer,
    menuCountAction,
    // profileEditReducer,
    
});
