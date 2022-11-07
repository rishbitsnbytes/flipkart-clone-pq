import "./filters.css";
import {
  FilterSectionHeader,
  GenderFilter,
  BrandFilter,
  SizeFilter,
} from "../../components";

const FiltersSidebar = () => {
  return (
    <div>
      <aside className="aside-filter w-28 py-1 px-1-5 rounded-md h-80-pc">
        <div>
          <FilterSectionHeader />
          <div>
            <GenderFilter />
            <BrandFilter />
            <SizeFilter />
          </div>
        </div>
      </aside>
    </div>
  );
};

export { FiltersSidebar };
