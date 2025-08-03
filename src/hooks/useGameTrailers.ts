import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-clients";
import { GameTrail } from "../entities/Trailers";

const useGameTrailers = (gameId: number) => {
  const apiClient = new APIClient<GameTrail>(`games/${gameId}/movies`);

  return useQuery({
    queryKey: ["trailers", gameId],
    queryFn: apiClient.getAll,
  });
};

export default useGameTrailers;
