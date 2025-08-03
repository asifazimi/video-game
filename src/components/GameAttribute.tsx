import { SimpleGrid, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import CriticScore from "./CriticScore";
import DefinitionTerm from "./DefinitionTerm";

interface Props {
  game: Game;
}

const GameAttribute = ({ game }: Props) => {
  return (
    <SimpleGrid columns={2} as="dl">
      <DefinitionTerm term="Platforms">
        {game.parent_platforms.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </DefinitionTerm>
      <DefinitionTerm term="Metacritic Score">
        <CriticScore score={game.metacritic} />
      </DefinitionTerm>
      <DefinitionTerm term="Genres">
        {game.genres.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </DefinitionTerm>
      <DefinitionTerm term="Publishers">
        {game.publishers.map((publisher) => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
      </DefinitionTerm>
    </SimpleGrid>
  );
};

export default GameAttribute;
