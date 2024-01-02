import React from "react";
import { Triangle } from "react-loader-spinner";
import styles from "../css/loader.module.css";
function Loader() {
  return (
    <>
      <div className={styles.container}>
        <Triangle
          visible={true}
          height="200"
          width="50%vh"
          color="var(--mainColor)"
          ariaLabel="triangle-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
        <p>fetching data ...</p>
      </div>
    </>
  );
}

export default Loader;
