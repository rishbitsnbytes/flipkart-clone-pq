import { useContext, createContext, useReducer } from "react";
import { filterReducerFunction } from "../reducers";

const initialFilterState = {
  genders: {
    Male: false,
    Female: false,
  },
  brands: {
    Puma: false,
    "Van Heusen": false,
    Bermuda: false,
    "Allen Solly": false,
    "Louis Philippe": false,
  },
  sizes: {
    S: false,
    M: false,
    L: false,
    XL: false,
  },
  sortByType: "",
};

const FilterContext = createContext(initialFilterState);

const FilterProvider = ({ children }) => {
  const [filterState, filterDispatch] = useReducer(
    filterReducerFunction,
    initialFilterState
  );

  return (
    <FilterContext.Provider
      value={{ filterState: { ...filterState }, filterDispatch }}
    >
      {children}
    </FilterContext.Provider>
  );
};

const useFilter = () => useContext(FilterContext);

export { FilterProvider, useFilter, initialFilterState };
