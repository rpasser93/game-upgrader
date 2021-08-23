import { useSelector } from "react-redux";
import _ from 'lodash';

const IndividualBoardgame = ({id, history}) => {
  const games = useSelector((state) => state.games);
  const game = useSelector((state) => state.gameId);

  if (!_.find(games, {id: id}))
    return <h1>Game not found</h1>

  console.log(game);

  return (
    <div>
      <p>{game.name}</p>
    </div>
  )
}

export default IndividualBoardgame;