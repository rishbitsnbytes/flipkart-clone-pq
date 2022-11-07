import "./filters.css";
import { useFilter } from "../../contexts";

const GenderFilter = () => {
  const {
    filterState: { genders },
    filterDispatch,
  } = useFilter();

  const handleGenderChange = (event) => {
    filterDispatch({
      type: "FILTER_BY_GENDER",
      payload: event.target.value,
    });
  };

  return (
    <div className="filter-brand my-5">
      <p className="text-lg font-bold mb-0-75">Gender</p>
      <div className="filter-input-subsection px-1">
        <ul>
          <li
            className="flex-row flex-justify-start flex-align-center gap-0-5"
            key="Male"
          >
            <input
              type="checkbox"
              id="Male"
              name="Male"
              value="Male"
              checked={genders["Male"]}
              onChange={handleGenderChange}
            />
            <label className="mx-0-5" htmlFor="Male">
              Male
            </label>
          </li>
          <li
            className="flex-row flex-justify-start flex-align-center gap-0-5"
            key="Female"
          >
            <input
              type="checkbox"
              id="Female"
              name="Female"
              value="Female"
              checked={genders["Female"]}
              onChange={handleGenderChange}
            />
            <label className="mx-0-5" htmlFor="Female">
              Female
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
};

export { GenderFilter };
