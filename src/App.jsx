import { Navigate, Route, Routes } from "react-router-dom";
import ProductsPage from "./Pages/ProductsPage";
import DetailPage from "./Pages/DetailPage";
import Checkout from "./Pages/Checkout";
import PAgeNotFound from "./Pages/404";
import ProductsContext from "./context/ProductsContext";
import Layout from "./layout/Layout";
import CartProvider from "./context/CartProvider";

function App() {
  return (
    <>
      <CartProvider>
        <ProductsContext>
          <Layout>
            <Routes>
              <Route index element={<Navigate to="/products" replace />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/products/:id" element={<DetailPage />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/*" element={<PAgeNotFound />} />
            </Routes>
          </Layout>
        </ProductsContext>
      </CartProvider>
    </>
  );
}

export default App;
