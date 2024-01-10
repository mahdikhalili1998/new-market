import React from "react";
import styles from "../css/layout.module.css";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCard } from "../context/CartProvider";
function Layout({ children }) {
  const [state] = useCard();
  // console.log(state);
  return (
    <div className={styles.container}>
      <header>
        <div style={{ marginLeft: "2rem" }}>
          <Link className={styles.link} to="/products">
            Online Market
          </Link>
          <p className={styles.littleText}>enjoy shopping ...</p>
        </div>
        <div className={styles.basketcontainer}>
          <Link to="/checkout">
            {" "}
            <FaShoppingCart
              style={{ color: "#fff", fontSize: "2.5rem", marginRight: "2rem" }}
            />
          </Link>
          {!!state.counterItem && (
            <p className={styles.number}> {state.counterItem}</p>
          )}
        </div>
      </header>
      {children}
      <footer> This is footer</footer>
    </div>
  );
}

export default Layout;
