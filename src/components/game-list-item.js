import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchGameById } from "../actions/actions";

const GameListItem = ({game}) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(fetchGameById(game.gameId));
  }

  return (
    <Link onClick={handleClick} to={`/games/${game.id}`} className="game-list-link">{game.name}</Link>
  )
}

export default GameListItem;