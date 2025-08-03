import { Box, Heading, HStack, Image, Link } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import useGameQueryStore from "../store/gameQueryStore";
import GenreSkeleton from "./GenreSkeleton";

const GenreList = () => {
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore((s) => s.setGenre);
  const { data, error, isLoading } = useGenres();

  if (error) return null;

  const skeletons = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
  ];

  return (
    <>
      {isLoading &&
        skeletons.map((sk) => {
          return <GenreSkeleton key={sk} />;
        })}
      <Box
        listStyleType="none"
        position="sticky"
        top="0"
        zIndex={10}
        paddingX={2}
      >
        <Heading marginY={2}>Genres</Heading>
        {data?.results?.map((genre) => (
          <Box key={genre.id} paddingY="5px">
            <HStack>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                borderRadius={8}
                boxSize="32px"
                objectFit="cover"
              />
              <Link
                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
                variant="underline"
                onClick={() => setSelectedGenreId(genre.id)}
              >
                {genre.name}
              </Link>
            </HStack>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default GenreList;
