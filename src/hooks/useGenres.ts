import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import APIClient from "../services/api-clients";

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
    staleTime: 24 * 60 * 60 * 1000, // 24 hours, it means no request to the backend to fetch the genres within this time
    initialData: genres, // This is used to provide initial data for the query, useful for faster loading
  });

export default useGenres;
