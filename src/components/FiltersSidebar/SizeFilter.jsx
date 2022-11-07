import "./filters.css";
import { useFilter } from "../../contexts";

const SizeFilter = () => {
  const {
    filterState: { sizes },
    filterDispatch,
  } = useFilter();

  const sizeData = ["S", "M", "L", "XL"];

  const handleSizeFilter = (event) => {
    filterDispatch({
      type: "FILTER_BY_SIZE",
      payload: event.target.value,
    });
  };

  return (
    <div className="filter-brand my-5">
      <p className="text-lg font-bold mb-0-75">Sizes</p>
      <div className="filter-input-subsection px-1">
        <ul>
          {sizeData.map((size) => (
            <li
              className="flex-row flex-justify-start flex-align-center gap-0-5"
              key={size}
            >
              <input
                type="checkbox"
                id={size}
                name={size}
                value={size}
                checked={sizes[size]}
                onChange={handleSizeFilter}
              />
              <label className="mx-0-5" htmlFor={size}>
                {size}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export { SizeFilter };
