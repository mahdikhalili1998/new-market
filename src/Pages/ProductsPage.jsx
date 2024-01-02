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
        <div className={styles.cardContainer}>
          {products.map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductsPage;
