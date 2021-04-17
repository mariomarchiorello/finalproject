const initialState = {
  currentSample: [],
  annotatedImages: [{ counter: 0 }],
};

export function annotationReducer(state = initialState, action) {
  // console.log(initialState.currentSample, "current sample");
  // console.log(action.id, "id");
  if (action.type === "ANNOTATED_IMAGE") {
    return {
      ...state,
      annotatedImages: [
        ...state.annotatedImages.slice(0, action.id - 2),
        { counter: action.payload },
        ...state.annotatedImages.slice(action.id - 2),
      ],
    };
  }
  if (action.type === "GET_LAST_SAMPLE") {
    // console.log("././././ on reducer sample ", action.payload);
    return {
      ...state,
      currentSample: action.payload,
    };
  }
  return state;
}
