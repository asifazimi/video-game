import { Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genre?: Genre;
  platform?: Platform;
  sort?: string;
  searchText?: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{ base: "1fr", lg: "200px 1fr" }}
    >
      <GridItem area="nav">
        <Navbar
          onSubmit={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        />
      </GridItem>
      {useBreakpointValue({ base: false, lg: true }) && (
        <GridItem area="aside" paddingX={2}>
          <GenreList
            selectedGenre={gameQuery.genre ?? null}
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </GridItem>
      )}
      <GridItem area="main">
        <GameHeading gameQuery={gameQuery} />
        <PlatformSelector
          selectedPlatform={gameQuery.platform ?? null}
          onSelectPlatform={(platform) =>
            setGameQuery({ ...gameQuery, platform })
          }
        />
        <SortSelector
          sort={gameQuery.sort}
          onSelectSort={(sort) => setGameQuery({ ...gameQuery, sort })}
        />
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
