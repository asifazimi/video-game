import { Box, Heading, HStack, Image, Link } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GenreSkeleton from "./GenreSkeleton";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
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
      <Box listStyleType="none">
        <Heading marginY={2}>Genres</Heading>
        {data?.map((genre) => (
          <Box key={genre.id} paddingY="5px">
            <HStack>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                borderRadius={8}
                boxSize="32px"
                objectFit="cover"
              />
              <Link
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                variant="underline"
                onClick={() => onSelectGenre(genre)}
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
