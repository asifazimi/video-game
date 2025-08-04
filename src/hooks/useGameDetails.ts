import { useQuery } from "@tanstack/react-query";
import Game from "../entities/Game";
import APIClient from "../services/api-clients";

const apiClient = new APIClient<Game>("/games");

const useGameDetails = (slug?: string) => {
  return useQuery<Game>({
    queryKey: ["game", slug],
    queryFn: () =>
      slug ? apiClient.get(slug) : Promise.reject("No slug provided"),
  });
};

export default useGameDetails;
