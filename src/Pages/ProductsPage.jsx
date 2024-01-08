import Card from "../components/Card";
import Loader from "../components/Loader";
import { useProducts } from "../context/ProductsContext";
import styles from "../css/ProductsPage.module.css";
import { useEffect, useState } from "react";

import {
  createQuery,
  filterProducts,
  keeper,
  searchProducts,
} from "../helper/titleName";
import { useSearchParams } from "react-router-dom";
import SearchBox from "../components/SearchBox";
import SideBar from "../components/SideBar";
function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const products = useProducts();
  const [displayed, setDisplayed] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState({});

  useEffect(() => {
    setDisplayed(products);
    setQuery(keeper(searchParams));
    setSearch(query.search || "");
  }, [products]);

  useEffect(() => {
    setSearchParams(query);
    let finalsearch = searchProducts(products, query.search);
    finalsearch = filterProducts(finalsearch, query.categories);
    setDisplayed(finalsearch);
  }, [query]);

  const searchHandler = () => {
    setQuery((query) => createQuery(query, { search }));
  };
  return (
    <div className={styles.allContainer}>
      {!displayed.length ? (
        <Loader className={styles.loader} />
      ) : (
        <div>
          <SearchBox
            search={search}
            setSearch={setSearch}
            searchHandler={searchHandler}
          />
          <div className={styles.ds}>
            <div className={styles.cardContainer}>
              {displayed.map((item) => (
                <Card key={item.id} data={item} />
              ))}
            </div>
            <SideBar query={query} setQuery={setQuery} />
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductsPage;
