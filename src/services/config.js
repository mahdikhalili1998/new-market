import axios from "axios";

const api = axios.create({ BASE_URL: "https://fakestoreapi.com/products" });

api.interceptors.response.use(
  (res) => console.log(res),
  (error) => console.log(error)
);
export default api;
