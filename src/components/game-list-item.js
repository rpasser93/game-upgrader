import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchGameById } from "../actions/actions";

const GameListItem = ({game}) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(fetchGameById(game.gameId));
  }

  return (
    // <Link onClick={handleClick} to={`/games/${game.id}`}>{game.name}</Link>
    <div>
      <img src={game.thumbnailUrl} alt={game.name}></img>
      <p>{game.name}</p>
    </div>
    
  )
}

export default GameListItem;