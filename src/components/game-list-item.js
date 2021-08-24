import { Link } from "react-router-dom";
import { useHistory } from "react-router";

const GameListItem = ({game}) => {
  const history = useHistory();

  const clickHandler = () => {
    history.push(`/games/${game.id}`);
  }

  return (
    <div>
    <img src={game.thumbnailUrl} alt={game.name} className="mx-auto d-block thumbnail-list-image" onClick={clickHandler}></img>
    <Link to={`/games/${game.id}`} className="game-list-link">{game.name}</Link>
    </div>
  )
}

export default GameListItem;