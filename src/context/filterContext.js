import { useContext, createContext, useReducer } from "react";
import { reducerFun } from "../reducer/filterReducer";

/* Steps :-
1) Create Context
2) Create Provider
3) Use Context
*/

const initialState = {
  sort: "LTH",
  size: "L",
  brand: "Zara",
};

const FilterContext = createContext(initialState);

const FilterProvider = ({ children }) => {
  const [state, filterDispatch] = useReducer(reducerFun, {
    sort: "",
    size: "",
    brand: "",
  });

  return (
    <FilterContext.Provider value={{ state, filterDispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilter = () => useContext(FilterContext);

export { useFilter, FilterProvider };
