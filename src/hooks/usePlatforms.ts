import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import { FetchResponse } from "../services/api-clients";
import apiClients from "../services/api-clients";
// import useData from "./useData";

interface PlatformParent {
  id: number;
  name: string;
  slug: string;
}

// /platforms/lists/parents
// const usePlatforms = () => {
//   // return useData<PlatformParent>("/platforms/lists/parents");
//   return { data: platforms, errors: null }; // we want to make the platforms to render statically
// };

const usePlatforms = () => {
  return useQuery<PlatformParent[]>({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClients
        .get<FetchResponse<PlatformParent>>("/platforms/lists/parents")
        .then((res) => res.data.results),
    staleTime: 24 * 60 * 60 * 1000,
    initialData: platforms,
  });
};

export default usePlatforms;
