import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import APIClient from "../services/api-clients";
import ms from "ms";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
  slug: string;
}

const apiClient = new APIClient<Genre>("/genres");

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"), // 24 hours
    initialData: genres, // This is used to provide initial data for the query, useful for faster loading
  });

export default useGenres;
