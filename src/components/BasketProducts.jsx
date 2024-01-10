import React from "react";
import { useCard } from "../context/CartProvider";
import { productsQuantity, titletext } from "../helper/titleName";
import styles from "../css/basket.module.css";
import { MdDelete } from "react-icons/md";

function BasketProducts() {
  const [state, dispatch] = useCard();

  const clickHandler = (type, payload) => {
    dispatch({ type, payload });
  };
  return (
    <div className={styles.allcontainer}>
      {state.selectedItem.map((item) => (
        <div className={styles.container} key={item.id}>
          <div className={styles.image}>
            <img src={item.image} alt={item.title} />
          </div>
          <p style={{ fontSize: "1.6rem", color: "black" }}>
            {titletext(item.title)}
          </p>
          <div className={styles.btcontainer}>
            {productsQuantity(state, item.id) > 0 && (
              <button
                className={styles.increase}
                onClick={() => clickHandler("INCREASE", item)}
              >
                +
              </button>
            )}
            {!!productsQuantity(state, item.id) && (
              <span className={styles.text}>
                {productsQuantity(state, item.id)}
              </span>
            )}
            {productsQuantity(state, item.id) === 1 && (
              <button
                className={styles.remove}
                onClick={() => clickHandler("REMOVE_ITEM", item)}
              >
                <MdDelete />
              </button>
            )}

            {productsQuantity(state, item.id) > 1 && (
              <button
                className={styles.increase}
                onClick={() => clickHandler("DECREASE", item)}
              >
                -{" "}
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default BasketProducts;
