import useGameTrailers from "../hooks/useGameTrailers";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data: trailers, isLoading, error } = useGameTrailers(gameId);
  if (isLoading) return null;
  if (error) throw error;

  const first = trailers?.results[0];

  return first ? (
    <video src={first.data[480]} controls poster={first.preview} />
  ) : null;
};

export default GameTrailer;
