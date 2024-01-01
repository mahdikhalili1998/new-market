import React, { createContext, useContext, useEffect, useState } from "react";

import api from "../services/config";

const ProductsContext = createContext();

function ProductsContextPage({ children }) {
  const [products, setProducts] = useState([]);

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
export default ProductsContextPage;
export { useProducts };
