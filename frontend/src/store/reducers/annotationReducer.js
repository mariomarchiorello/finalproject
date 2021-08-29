const initialState = {
  currentSample: [],
};

export function annotationReducer(state = initialState, action) {
  if (action.type === "GET_LAST_SAMPLE") {
    return {
      ...state,
      currentSample: action.payload,
    };
  }
  return state;
}
