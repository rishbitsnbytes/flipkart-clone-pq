import { ProductProvider, FilterProvider } from "./contexts";

export const AllProviders = ({ children }) => {
  return (
    <ProductProvider>
      <FilterProvider>{children}</FilterProvider>
    </ProductProvider>
  );
};
