import { Box, HStack, Image, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GenreSkeleton from "./GenreSkeleton";

const GenreList = () => {
  const { data, errors, loading } = useGenres();

  if (errors) return null;

  const skeletons = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
  ];

  return (
    <>
      {loading &&
        skeletons.map((sk) => {
          return <GenreSkeleton key={sk} />;
        })}
      <Box listStyleType="none">
        {data.map((genre) => (
          <Box key={genre.id} paddingY="5px">
            <HStack>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                borderRadius={8}
                boxSize="32px"
              />
              <Text fontSize="lg">{genre.name}</Text>
            </HStack>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default GenreList;
