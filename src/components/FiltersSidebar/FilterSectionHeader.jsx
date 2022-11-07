import "./filters.css";
import { useFilter } from "../../contexts";

const FilterSectionHeader = () => {
  const { filterDispatch } = useFilter();

  const handlerClearAllFilters = () => {
    filterDispatch({
      type: "CLEAR_ALL_FILTERS",
    });
  };

  return (
    <div className="filter-wrapper-head flex-row flex-justify-between flex-align-center">
      <h3 className="text-xl font-xbold">Filters</h3>
      <button className="btn btn-link text-md" onClick={handlerClearAllFilters}>
        Clear All
      </button>
    </div>
  );
};

export { FilterSectionHeader };
