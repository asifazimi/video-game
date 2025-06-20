import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const genre = useGenre(gameQuery.genreId);

  const platform = usePlatform(gameQuery.platformId);

  const heading = `${platform?.name || ""}${
    platform?.name && genre?.name ? " / " : ""
  }${genre?.name || ""} Games`;

  return (
    <Heading as="h1" paddingX={2} marginY={2}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
