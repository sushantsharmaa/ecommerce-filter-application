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
    case "BRAND":
      return {
        ...state,
        brand: action.payload.check
          ? [...state.brand, action.payload.option]
          : state.brand.length > 0
          ? state.brand.filter(
              (brandValue) => brandValue !== action.payload.option
            )
          : [],
      };
    case "CATEGORY":
      return {
        ...state,
        category: action.payload,
      };
    default:
      return state;
  }
};
