import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  const color = score > 80 ? "green" : score > 60 ? "yellow" : "red";

  return (
    <Badge fontSize="14px" paddingX={2} borderRadius="4px" colorPalette={color}>
      {score}
    </Badge>
  );
};

export default CriticScore;
