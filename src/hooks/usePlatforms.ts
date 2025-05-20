import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import APIClient from "../services/api-clients";
// import useData from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

// /platforms/lists/parents
// const usePlatforms = () => {
//   // return useData<PlatformParent>("/platforms/lists/parents");
//   return { data: platforms, errors: null }; // we want to make the platforms to render statically
// };

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: platforms.length, results: platforms },
  });

export default usePlatforms;
