import { useEffect, useState } from "react";
import apiClients from "../services/api-clients";
import { Text } from "@chakra-ui/react";

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
const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [errors, setErrors] = useState<string>("");

  useEffect(() => {
    apiClients
      .get<FetchGameResponse>("/games")
      .then((res) => setGames(res.data.results))
      .catch((err) => setErrors(err.message));
  }, []);

  return (
    <>
      {errors && <Text>{errors}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
