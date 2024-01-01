import Card from "../components/Card";
import { useProducts } from "../context/ProductsContext";
import styles from "../css/ProductsPage.module.css";
function ProductsPage() {
  const products = useProducts();

  return (
    <div className={styles.cardContainer}>
      {!products.length ? (
        <p>loading ...</p>
      ) : (
        products.map((item) => <Card key={item.id} data={item} />)
      )}
    </div>
  );
}

export default ProductsPage;
