import { combineReducers } from 'redux';

const initialState = {
    token: '',
    user: [],
}


const getSelfReducer = (state= initialState, action) => {
    if(action.type === 'GET_USER_ME'){
        return {...state, posts: action.payload}
    }
    return state
}

const signInReducer = (state = initialState, action) => {
    
    if(action.type === 'SIGNIN'){
        return {...state, token: action.payload.token, user: action.payload.userInfo}
    }
    return state
}






export const rootReducer = combineReducers({
    getSelfReducer,
    signInReducer,
    
});
