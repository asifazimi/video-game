import { useParams } from "react-router-dom";

const GameDetail = () => {
  const params = useParams();
  const { id } = params;

  return <div>GameDetail: {id}</div>;
};

export default GameDetail;
