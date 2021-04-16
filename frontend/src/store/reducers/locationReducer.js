
const initialState = {
    allLocations: [],

}

export function locationReducer (state = initialState, action) {
    switch (action.type){
        case "GET_ALL_LOCATIONS":
            //console.log("IN DA GET ALL LOCATIONS:", action.payload)
            return {...state, allLocations: action.payload};
        default:
            return state;
    }
}