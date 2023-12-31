import { Navigate, Route, Routes } from "react-router-dom";
import Products from "./Pages/Products";
import DetailPage from "./Pages/DetailPage";
import Checkout from "./Pages/Checkout";
import PAgeNotFound from "./Pages/404";

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<Navigate to="products" replace />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<DetailPage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/*" element={<PAgeNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
