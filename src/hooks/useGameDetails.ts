import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-clients";

const apiClient = new APIClient<GameDetail>("/games");

export interface GameDetail {
  id: number;
  name: string;
  background_image: string;
  slug: string;
  description: string;
  description_raw?: string;
}

const useGameDetails = (slug?: string) => {
  return useQuery<GameDetail>({
    queryKey: ["game", slug],
    queryFn: () =>
      slug ? apiClient.get(slug) : Promise.reject("No slug provided"),
  });
};

export default useGameDetails;
