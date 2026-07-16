import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../api/products";
import { data } from "react-router-dom";

export const useProducts = () => {
  const query = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  return { ...query, data: query.data ?? [] };
};
