import { Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";
import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import GenreList from "./components/GenreList";
import Navbar from "./components/Navbar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
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
            selectedGenreId={gameQuery.genreId}
            onSelectGenre={(genre) =>
              setGameQuery({ ...gameQuery, genreId: genre.id })
            }
          />
        </GridItem>
      )}
      <GridItem area="main">
        <GameHeading gameQuery={gameQuery} />
        <PlatformSelector
          selectedPlatformId={gameQuery.platformId}
          onSelectPlatform={(platform) =>
            setGameQuery({ ...gameQuery, platformId: platform.id })
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
