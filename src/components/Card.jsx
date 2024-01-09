import React, { useContext } from "react";
import styles from "../css/card.module.css";
import { Link } from "react-router-dom";
import { TbListDetails } from "react-icons/tb";
import { TbShoppingBagCheck } from "react-icons/tb";
import { productsQuantity, titletext } from "../helper/titleName";
import { useCard } from "../context/CartProvider";
import { MdDelete } from "react-icons/md";

function Card({ data }) {
  const { id, image, price, title } = data;
  const [state, dispatch] = useCard();
  // console.log(result);

  const shopingHandler = (type) => {
    dispatch({ type, payload: data });
  };
  const quantity = productsQuantity(state, id);
  console.log(quantity);
  return (
    <div className={styles.container}>
      <img src={image} alt={title} />
      <p>{titletext(title)}</p>
      <p style={{ color: "black" }}>{price}</p>
      <div className={styles.tokme}>
        <Link to={`/products/${id}`}>
          <TbListDetails />
        </Link>
        <div className={styles.bts}>
          {quantity === 0 ? (
            <button onClick={() => shopingHandler("ADD_ITEM")}>
              <TbShoppingBagCheck />
            </button>
          ) : (
            <button  className={styles.kz} onClick={() => shopingHandler("INCREASE")}>+</button>
          )}
          {!!quantity && <span>{quantity}</span>}
          {quantity === 1 && (
            <button className={styles.remove} onClick={() => shopingHandler("REMOVE_ITEM")}>
              <MdDelete />
            </button>
          )}
          {quantity > 1 && (
            <button className={styles.kz}  onClick={() => shopingHandler("DECREASE")}>-</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
