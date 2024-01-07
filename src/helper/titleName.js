const titletext = (text) => {
  return text.split(" ").slice(0, 3).join(" ");
};
const searchProducts = (products, search) => {
  if (!search) return products;
  const searchedProducts = products.filter((p) =>
    p.title.toLowerCase().includes(search)
  );

  return searchedProducts;
};
const filterProducts = (products, categorie) => {
  if (!categorie) return products;
  const filteredCategoies = products.filter(
    (item) => item.category === categorie
  );
  return filteredCategoies;
};
const createQuery = (currentQuery, newQuery) => {
  if (newQuery.categories === "all") {
    const { categories, ...other } = currentQuery;
    return other;
  }
  if (newQuery.search === "") {
    const { search, ...other } = currentQuery;
    return other;
  }
  return {
    ...currentQuery,
    ...newQuery,
  };
};

export { titletext, searchProducts, filterProducts, createQuery };
