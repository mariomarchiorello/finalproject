import { combineReducers } from 'redux';

const initialState = {
    token: '',
    user: []
}


const getSelfReducer = (state= initialState, action) => {
    if(action.type === 'GET_USER_ME'){
        return {...state, posts: action.payload}
    }
    return state
}






export const rootReducer = combineReducers({
    getSelfReducer,
    
});
