import { fetchCategory } from "../api/category";
import { useQuery } from "@tanstack/react-query";

export const useCategory = () => {
  const query = useQuery({
    queryKey: ["category"],
    queryFn: fetchCategory,
    staleTime: 1000 * 60 * 60,
  });

  return { ...query, data: query.data ?? [] };
};
