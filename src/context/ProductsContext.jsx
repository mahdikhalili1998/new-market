import React, { createContext, useContext, useEffect, useState } from "react";

import api from "../services/config";

const ProductsContext = createContext();

function ProductsContextPage({ children }) {
  const [products, setProducts] = useState([]);
  // console.log(products);
  useEffect(() => {
    const getData = async () => {
      try {
        setProducts(await api.get("/products"));
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  );
}

const useProducts = () => {
  const products = useContext(ProductsContext);
  return products;
};
const detailProducts = (id) => {
  const products = useContext(ProductsContext);
  const finde = products.find((item) => item.id === id);
  return finde;
};
export default ProductsContextPage;
export { useProducts, detailProducts };
