import genres from "../data/genres";
import { useQuery } from "@tanstack/react-query";
import apiClients from "../services/api-clients";
import { FetchResponse } from "./useData";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
  slug: string;
}

// const useGenres = () => useData<Genre>("/genres");
// const useGenres = () => ({ data: genres, loading: false, errors: null }); // Here because we want to render the genres statically

// const fetchGenres = () => {
//   return axios.get<Genre[]>("/genres").then((res) => res.data);
// };

const useGenres = () =>
  useQuery<Genre[]>({
    queryKey: ["genres"],
    queryFn: () =>
      apiClients
        .get<FetchResponse<Genre>>("/genres")
        .then((res) => res.data.results),
    staleTime: 24 * 60 * 60 * 1000, // 24 hours,
    initialData: genres,
  });

export default useGenres;
