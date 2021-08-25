import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { fetchExpansions } from "../actions/actions";

const GameListItem = ({game}) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const clickHandler = () => {
    history.push(`/games/${game.id}`);
    dispatch(fetchExpansions(game.name));
  }

  return (
    <div>
      <img src={game.thumbnailUrl} alt={game.name} className="mx-auto d-block thumbnail-list-image" onClick={clickHandler}></img>
      <Link to={`/games/${game.id}`} className="game-list-link" onClick={clickHandler}>{game.name}</Link>
    </div>
  )
}

export default GameListItem;