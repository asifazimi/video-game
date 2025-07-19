import { Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";
import { useReducer } from "react";
import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import GenreList from "./components/GenreList";
import Navbar from "./components/Navbar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import { gameQueryReducer } from "./hooks/GameQueryReducer";

function App() {
  const [gameQuery, dispatch] = useReducer(gameQueryReducer, {});

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{ base: "1fr", lg: "200px 1fr" }}
    >
      {/* Search Bar */}
      <GridItem area="nav">
        <Navbar
          onSubmit={(searchText) =>
            dispatch({ type: "SET_SEARCH", payload: searchText })
          }
        />
      </GridItem>
      {/* Genre List and Main Content */}
      {useBreakpointValue({ base: false, lg: true }) && (
        <GridItem area="aside" paddingX={2}>
          <GenreList
            selectedGenreId={gameQuery.genreId}
            onSelectGenre={(genre) =>
              dispatch({ type: "SET_GENRE", payload: genre.id })
            }
          />
        </GridItem>
      )}
      {/* Platform Selector */}
      <GridItem area="main">
        <GameHeading gameQuery={gameQuery} />
        <PlatformSelector
          selectedPlatformId={gameQuery.platformId}
          onSelectPlatform={(platform) =>
            dispatch({ type: "SET_PLATFORM", payload: platform.id })
          }
        />
        {/* Sort Selector */}
        <SortSelector
          sort={gameQuery.sort}
          onSelectSort={(sort) => dispatch({ type: "SET_SORT", payload: sort })}
        />
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
