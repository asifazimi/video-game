import { Box, Card, HoverCard, Image, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import placeholderImage from "../assets/no-image-placeholder-6f3882e0.webp";
import { Game } from "../hooks/useGames";
import getCroppedImageUrl from "../services/image-url";
import CriticScore from "./CriticScore";
import EmojiCard from "./EmojiCard";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

export const GameCard = ({ game }: Props) => {
  const url = game.background_image;

  return (
    <Card.Root>
      <HoverCard.Root>
        <Link to={`/games/` + game.slug}>
          <Box
            transition="all 0.3s"
            _hover={{
              boxShadow: "lg",
              transform: "scale(1.03)",
            }}
            borderRadius="lg"
          >
            <Image
              src={url ? getCroppedImageUrl(url) : placeholderImage}
              fit="cover"
              h="200px"
              alt={game.name}
              cursor="pointer"
              width="100%"
            />
            <Card.Body gap="2">
              <Stack direction="row" justify="space-between">
                <PlatformIconList
                  platforms={
                    game.parent_platforms?.map((p) => p.platform) ?? []
                  }
                />
                <CriticScore score={game.metacritic} />
              </Stack>
              <Card.Title fontSize="1xl" cursor="pointer">
                {game.name}
              </Card.Title>
              <EmojiCard rating={game.rating_top} />
            </Card.Body>
          </Box>
        </Link>
      </HoverCard.Root>
    </Card.Root>
  );
};
