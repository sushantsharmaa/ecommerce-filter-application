import { useContext, createContext, useReducer } from "react";
import { filterReducer } from "../reducer/filterReducer";

/* Steps :-
1) Create Context
2) Create Provider
3) Use Context
*/

const FilterContext = createContext();

const FilterProvider = ({ children }) => {
  const [state, filterDispatch] = useReducer(filterReducer, {
    sort: "",
    size: [],
    brand: [],
    category: "all",
  });

  return (
    <FilterContext.Provider value={{ state, filterDispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilter = () => useContext(FilterContext);

export { useFilter, FilterProvider };
