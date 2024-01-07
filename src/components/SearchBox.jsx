import React from "react";
import styles from "../css/ProductsPage.module.css";
import { IoSearch } from "react-icons/io5";
function SearchBox({ search, setSearch, searchHandler }) {
  return (
    <div className={styles.searchBox}>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value.toLocaleLowerCase().trim())}
      />
      <IoSearch
        onClick={searchHandler}
        style={{ fontSize: "2rem", color: "var(--mainColor)" }}
      />
    </div>
  );
}

export default SearchBox;
