import { Routes, Route } from "react-router-dom";
import { HomePage, ProductsPage, NotFoundPage } from "../pages";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/home" element={<HomePage />}></Route>
      <Route path="/products" element={<ProductsPage />}></Route>
      <Route path="*" element={<NotFoundPage />}></Route>
    </Routes>
  );
};

export { AppRoutes };
