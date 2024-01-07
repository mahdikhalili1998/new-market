import { FaListUl } from "react-icons/fa";
import styles from "../css/ProductsPage.module.css";
import { createQuery } from "../helper/titleName";
function SideBar({ setQuery, query }) {
  const data = [
    { id: 1, category: "All" },
    { id: 2, category: "Electronics" },
    { id: 3, category: "Jewelery" },
    { id: 4, category: "Men's Clothing" },
    { id: 5, category: "Women's Clothing" },
  ];
  const categorieHandler = (e) => {
    const tagname = e.target.tagname;
    const categories = e.target.innerText.toLowerCase();
    setQuery((query) => createQuery(query, { categories }));
    if (tagname !== "LI") return;
  };
  return (
    <div className={styles.catgoriContainer}>
      <div className={styles.categorieIcons}>
        <FaListUl />
        <p>Categories</p>
      </div>
      <ul onClick={categorieHandler} className={styles.ul}>
        {data.map((item) => (
          <li
            key={item.id}
            className={
              item.category.toLocaleLowerCase() === query.categories
                ? styles.selected
                : null
            }
          >
            {item.category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideBar;
