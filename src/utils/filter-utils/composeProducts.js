import {
  filterByGender,
  filterByBrand,
  filterBySize,
  sortBy,
} from "../../utils";
import { useFilter } from "../../contexts";

const ComposeProducts = (productsInitialState) => {
  const {
    filterState: { genders, brands, sizes, sortByType },
  } = useFilter();

  const productsFilteredByGender = filterByGender(
    productsInitialState,
    genders
  );

  const productsFilteredByBrand = filterByBrand(
    productsFilteredByGender,
    brands
  );

  const productsFilteredBySize = filterBySize(productsFilteredByBrand, sizes);

  const productsFilteredSorted = sortBy(productsFilteredBySize, sortByType);

  return productsFilteredSorted;
};

export { ComposeProducts };
