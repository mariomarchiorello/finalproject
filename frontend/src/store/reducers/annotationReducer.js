const initialState = {
  currentSample: [],
  annotatedImages: {},
};

export function annotationReducer(state = initialState, action) {
  if (action.type === "GET_LAST_SAMPLE") {
    return {
      ...state,
      currentSample: action.payload,
    };
  } else if (action.type === "PATCH_IMAGE") {
    return { ...state, annotatedImages: action.payload };
  }
  return state;
}
