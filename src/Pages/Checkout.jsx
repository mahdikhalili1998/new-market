import React from "react";
import { useCard } from "../context/CartProvider";
import BasketProducts from "../components/BasketProducts";
import FinalInfo from "../components/FinalInfo";
import styles from "../css/checkout.module.css";
import Empty from "../components/Empty";

function Checkout() {
  const [state, dispatch] = useCard();

  return (
    <>
      {!state.counterItem ? (
        <Empty />
      ) : (
        <div className={styles.container}>
          <FinalInfo />
          <BasketProducts />
        </div>
      )}
    </>
  );
}

export default Checkout;
