import { useEffect, useState } from "react";
import apiClients from "../services/api-clients";
import { CanceledError } from "axios";

interface Game {
  id: number;
  name: string;
  image: string;
  release_date: string;
  rating: number;
  platforms: string[];
}

interface FetchGameResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [errors, setErrors] = useState<string>("");

  useEffect(() => {
    const controller = new AbortController();

    apiClients
      .get<FetchGameResponse>("/games", { signal: controller.signal })
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setErrors(err.message);
      });

    return () => controller.abort();
  }, []);

  return { games, errors };
};

export default useGames;
