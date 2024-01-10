import styles from "../css/FinalInfo.module.css";
import { useCard } from "../context/CartProvider";
import { FaHashtag } from "react-icons/fa6";
import { BsCurrencyDollar } from "react-icons/bs";
import { FaRegClock } from "react-icons/fa6";

function FinalInfo() {
  const [state, dispatch] = useCard();
  const clickHandler = (type, data) => {
    dispatch({ type });
  };
  console.log(state);
  return (
    <div className={styles.container}>
      <p>
        <FaHashtag style={{ color: " var(--mainColor)" }} /> Quantity :{" "}
        {state.counterItem}
      </p>
      <p>
        <BsCurrencyDollar style={{ color: " var(--mainColor)" }} />
        Total Prices : {state.total}
      </p>
      {state.counterItem ? (
        <p>
          {" "}
          <FaRegClock style={{ color: " var(--mainColor)" }} /> Pending ...{" "}
        </p>
      ) : null}
      <button onClick={() => clickHandler("CHECK_OUT")}>Check out</button>
    </div>
  );
}

export default FinalInfo;
