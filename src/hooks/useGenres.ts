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

// const useGenres = () => useData<Genre>("/genres");
// const useGenres = () => ({ data: genres, loading: false, errors: null }); // Here because we want to render the genres statically

// const fetchGenres = () => {
//   return axios.get<Genre[]>("/genres").then((res) => res.data);
// };

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24 hours, it means no request to the backend to fetch the genres within this time
    initialData: { count: genres.length, results: genres },
  });

export default useGenres;
