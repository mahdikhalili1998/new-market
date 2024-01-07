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

const keeper = (searchParams) => {
  const query = {};
  const category = searchParams.get("categories");
  const search = searchParams.get("search");
  if (category) {
    query.categories = category;
  }
  if (search) {
    query.search = search;
  }

  return query;
};
export { titletext, searchProducts, filterProducts, createQuery, keeper };
