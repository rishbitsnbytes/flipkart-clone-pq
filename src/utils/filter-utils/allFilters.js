const filterByGender = (productsFromPrevFilter, genders) =>
  Object.keys(genders).filter((gender) => genders[gender]).length !== 0
    ? Object.keys(genders).reduce(
        (prev, curr) =>
          genders[curr]
            ? [
                ...prev,
                ...productsFromPrevFilter.filter(
                  ({ gender }) => gender === curr
                ),
              ]
            : prev,
        []
      )
    : productsFromPrevFilter;

const filterByBrand = (productsFromPrevFilter, brands) =>
  Object.keys(brands).filter((brand) => brands[brand]).length !== 0
    ? Object.keys(brands).reduce(
        (prev, curr) =>
          brands[curr]
            ? [
                ...prev,
                ...productsFromPrevFilter.filter(({ brand }) => brand === curr),
              ]
            : prev,
        []
      )
    : productsFromPrevFilter;

const filterBySize = (productsFromPrevFilter, sizes) => {
  return Object.keys(sizes).filter((size) => sizes[size]).length !== 0
    ? Object.keys(sizes).reduce(
        (prev, curr) =>
          sizes[curr]
            ? [
                ...prev,
                ...productsFromPrevFilter.filter((product) => {
                  return product.sizes.find((size) => {
                    return (size === curr ? true : false)
                      ? prev.find(
                          (alreadyFilteredProduct) =>
                            alreadyFilteredProduct._id === product._id
                        )
                        ? false
                        : true
                      : false;
                  });
                }),
              ]
            : prev,
        []
      )
    : productsFromPrevFilter;
};

export { filterByBrand, filterBySize, filterByGender };
