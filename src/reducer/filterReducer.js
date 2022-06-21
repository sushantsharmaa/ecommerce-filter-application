export const filterReducer = (state, action) => {
  switch (action.type) {
    case "lth":
      return {
        ...state,
        sort: action.payload,
      };
    case "htl":
      return {
        ...state,
        sort: action.payload,
      };
    case "SIZE":
      return {
        ...state,
        size: action.payload.check
          ? [...state.size, action.payload.option]
          : state.size.length > 0
          ? state.size.filter(
              (sizeValue) => sizeValue !== action.payload.option
            )
          : [],
      };
    default:
      return state;
  }
};
