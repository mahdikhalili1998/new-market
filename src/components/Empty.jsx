import { Link } from "react-router-dom";
import styles from "../css/empty.module.css";
import photo from "../image/p.png";
function Empty() {
  return (
    <div className={styles.container}>
      <img src={photo} alt="empty buy baskeet" />
      <div>
        <Link className={styles.link} to="/products">Go to Products page</Link>
      </div>
    </div>
  );
}

export default Empty;
