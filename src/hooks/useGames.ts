import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import APIClient, { FetchResponse } from "../services/api-clients";
import useGameQueryStore from "../store/gameQueryStore";

const apiClient = new APIClient<Game>("/games");

import { Genre } from "../hooks/useGenres";
import { Platform } from "../hooks/usePlatforms";

export interface Game {
  id: number;
  name: string;
  image: string;
  parent_platforms: { platform: Platform }[];
  background_image: string;
  slug: string;
  metacritic: number;
  rating_top: number;
  description_raw?: string;
  genres: Genre[];
  publishers: { id: number; name: string }[];
}

const useGames = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);

  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sort,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: ms("24h"), // 24 hours
  });
};

export default useGames;
