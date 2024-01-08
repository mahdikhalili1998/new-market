import React, { useContext } from "react";
import styles from "../css/card.module.css";
import { Link } from "react-router-dom";
import { TbListDetails } from "react-icons/tb";
import { TbShoppingBagCheck } from "react-icons/tb";
import { titletext } from "../helper/titleName";
import { useCard } from "../context/CartProvider";

function Card({ data }) {
  const { id, image, price, title } = data;
  const [state, dispatch] = useCard();
  // console.log(result);

  const shopingHandler = () => {
    dispatch({ type: "ADD_ITEM", payload: data });
  };
  return (
    <div className={styles.container}>
      <img src={image} alt={title} />
      <p>{titletext(title)}</p>
      <p style={{ color: "black" }}>{price}</p>
      <div className={styles.tokme}>
        <Link to={`/products/${id}`}>
          <TbListDetails />
        </Link>
        <button onClick={shopingHandler}>
          <TbShoppingBagCheck />
        </button>
      </div>
    </div>
  );
}

export default Card;
