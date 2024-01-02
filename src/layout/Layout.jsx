import React from "react";
import styles from "../css/layout.module.css";
import { FaShoppingCart } from "react-icons/fa";
function Layout({ children }) {
  return (
    <div className={styles.container}>
      <header>
        <div style={{ marginLeft: "2rem" }}>
          <h1>Online Market</h1>
          <p className={styles.littleText}>enjoy shopping ...</p>
        </div>
        <FaShoppingCart
          style={{ color: "#fff", fontSize: "2.5rem", marginRight: "2rem" }}
        />
      </header>
      {children}
      <footer> This is footer</footer>
    </div>
  );
}

export default Layout;
