import React from "react";
import styles from "../css/card.module.css";
import { Link } from "react-router-dom";
import { TbListDetails } from "react-icons/tb";
import { TbShoppingBagCheck } from "react-icons/tb";
import { titletext } from "../helper/titleName";
function Card({ data }) {
  const { category, description, id, image, price, rating, title } = data;
  return (
    <div className={styles.container}>
      <img src={image} alt={title} />
      <p>{titletext(title)}</p>
      <p style={{ color: "black" }}>{price}</p>
      <div className={styles.tokme}>
        <Link to={`/products/${id}`}>
          <TbListDetails />
        </Link>
        <button>
          <TbShoppingBagCheck />
        </button>
      </div>
    </div>
  );
}

export default Card;
