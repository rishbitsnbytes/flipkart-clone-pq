import { initialFilterState } from "../contexts/filter-context";

const filterActionTypes = {
  FILTER_BY_GENDER: "FILTER_BY_GENDER",
  FILTER_BY_BRAND: "FILTER_BY_BRAND",
  FILTER_BY_SIZE: "FILTER_BY_SIZE",
  SORT_BY: "SORT_BY",
  CLEAR_ALL_FILTERS: "CLEAR_ALL_FILTERS",
};

const filterReducerFunction = (prevFilterState, { type, payload }) => {
  switch (type) {
    case filterActionTypes.CLEAR_ALL_FILTERS: {
      return {
        ...initialFilterState,
      };
    }

    case filterActionTypes.FILTER_BY_GENDER: {
      return {
        ...prevFilterState,
        genders: {
          ...prevFilterState.genders,
          [payload]: !prevFilterState.genders[payload],
        },
      };
    }

    case filterActionTypes.FILTER_BY_BRAND: {
      return {
        ...prevFilterState,
        brands: {
          ...prevFilterState.brands,
          [payload]: !prevFilterState.brands[payload],
        },
      };
    }

    case filterActionTypes.FILTER_BY_SIZE: {
      return {
        ...prevFilterState,
        sizes: {
          ...prevFilterState.sizes,
          [payload]: !prevFilterState.sizes[payload],
        },
      };
    }

    case filterActionTypes.SORT_BY: {
      return {
        ...prevFilterState,
        sortByType: payload,
      };
    }

    default:
      return {
        ...initialFilterState,
      };
  }
};

export { filterReducerFunction };
