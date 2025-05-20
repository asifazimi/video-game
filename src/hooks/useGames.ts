import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import APIClient, { FetchResponse } from "../services/api-clients";
import { Platform } from "./usePlatforms";
// import useData from "./useData";

const apiClient = new APIClient<Game>("/games");

export interface Game {
  id: number;
  name: string;
  image: string;
  parent_platforms: { platform: Platform }[];
  background_image: string;
  slug: string;
  metacritic: number;
  rating_top: number;
}

/*
const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.sort,
        search: gameQuery.searchText,
      },
    }, // Sending the platforms, genres, and ordering to the API
    [gameQuery]
  );
  */
// The above code is commented out because we are using react-query instead of useData

const useGames = (gameQuery: GameQuery) =>
  useQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sort,
          search: gameQuery.searchText,
        },
      }),
  });

export default useGames;
