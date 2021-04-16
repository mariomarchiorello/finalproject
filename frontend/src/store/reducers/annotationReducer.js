const initialState = {
  images: [],
  annotatedImages: [{ counter: 0 }],
};

export function annotationReducer(state = initialState, action) {
  console.log(action.id, "id");
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
  return state;
}
