import React from "react";
import { Link, useParams } from "react-router-dom";
import { detailProducts } from "../context/ProductsContext";
import Loader from "../components/Loader";
import styles from "../css/detail.module.css";
import { ImPriceTag } from "react-icons/im";
import { MdOutlineStarRate } from "react-icons/md";
import { IoArrowBack } from "react-icons/io5";
function DetailPage() {
  const { id } = useParams();
  const info = detailProducts(+id);
  console.log(info);
  if (!info) return;
  <Loader />;

  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={info.image} alt={info.title} />
      </div>
      <div className={styles.text}>
        <p>{info.description}</p>
        <p>
          <ImPriceTag
            style={{ color: " var(--mainColor)", marginTop: "3px" }}
          />{" "}
          Prices : {info.price}
        </p>
        <div className={styles.rb}>
          <p>
            <MdOutlineStarRate
              style={{ color: " var(--mainColor)", fontSize: "2.2rem" }}
            />
            Rating : {info.rating.rate}
          </p>
          <Link className={styles.link} to="/products">
            <IoArrowBack
              style={{
                color: " var(--mainColor)",
                fontSize: "1.8rem",
                marginTop: "2px",
              }}
            />
            back to shop
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
