export const reducerFun = (state, action) => {
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
    default:
      return state;
  }
};
