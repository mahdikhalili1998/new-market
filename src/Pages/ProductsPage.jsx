import { FaListUl } from "react-icons/fa";
import Card from "../components/Card";
import Loader from "../components/Loader";
import { useProducts } from "../context/ProductsContext";
import styles from "../css/ProductsPage.module.css";
function ProductsPage() {
  const products = useProducts();

  return (
    <div className={styles.allContainer}>
      {!products.length ? (
        <Loader className={styles.loader} />
      ) : (
        <div className={styles.ds}>
          <div className={styles.cardContainer}>
            {products.map((item) => (
              <Card key={item.id} data={item} />
            ))}
          </div>
          <div>
            <div className={styles.categorieIcons}>
              <FaListUl />
              <p>Categories</p>
            </div>
            <ul className={styles.ul}>
              <li>All</li>
              <li>Electronics</li>
              <li>Jewelery</li>
              <li>Men's Clothing</li>
              <li>Womens's Clothing</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductsPage;
