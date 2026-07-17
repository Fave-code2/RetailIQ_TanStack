import axios from "axios";

const api = axios.create({
  baseURL: "https://dummyjson.com",
});

export const fetchProducts = async () => {
  const res = await api.get("/products?limit=194");
  return res.data.products;
};
