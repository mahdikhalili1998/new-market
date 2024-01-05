import { FaListUl } from "react-icons/fa";
import Card from "../components/Card";
import Loader from "../components/Loader";
import { useProducts } from "../context/ProductsContext";
import styles from "../css/ProductsPage.module.css";
import { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { filterProducts, searchProducts } from "../helper/titleName";
function ProductsPage() {
  const products = useProducts();
  const [displayed, setDisplayed] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState({});
  console.log(displayed);
  useEffect(() => {
    setDisplayed(products);
    let finalsearch = searchProducts(products, query.search);
    finalsearch = filterProducts(finalsearch, query.categories);
    setDisplayed(finalsearch);
    // console.log(query);
  }, [products, query]);

  const categorieHandler = (e) => {
    const tagname = e.target.tagname;
    const categories = e.target.innerText.toLowerCase();
    setQuery((query) => ({ ...query, categories }));
    if (tagname !== "LI") return;
  };
  const searchHandler = () => {
    setQuery((query) => ({ ...query, search }));
  };
  return (
    <div className={styles.allContainer}>
      {!displayed.length ? (
        <Loader className={styles.loader} />
      ) : (
        <div>
          <div className={styles.searchBox}>
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value.toLocaleLowerCase().trim())
              }
            />
            <IoSearch
              onClick={searchHandler}
              style={{ fontSize: "2rem", color: "var(--mainColor)" }}
            />
          </div>
          <div className={styles.ds}>
            <div className={styles.cardContainer}>
              {displayed.map((item) => (
                <Card key={item.id} data={item} />
              ))}
            </div>
            <div className={styles.catgoriContainer}>
              <div className={styles.categorieIcons}>
                <FaListUl />
                <p>Categories</p>
              </div>
              <ul onClick={categorieHandler} className={styles.ul}>
                <li>All</li>
                <li>Electronics</li>
                <li>Jewelery</li>
                <li>Men's Clothing</li>
                <li>Women's Clothing</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductsPage;
