import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { fetchExpansionsByIds } from "../actions/actions";

const GameListItem = ({game}) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const clickHandler = () => {
    history.push(`/games/${game.id}`);
    dispatch(fetchExpansionsByIds(game.expansionIds));
  }

  return (
    <div className="thumbnail-list-tnt" onClick={clickHandler}>
      <img src={game.thumbnailUrl} alt={game.name} className="mx-auto d-block thumbnail-list-image" onClick={clickHandler}></img>
      <p className="text-center text-decoration-underline thumbnail-list-text">{game.name}</p>
    </div>
  )
}

export default GameListItem;