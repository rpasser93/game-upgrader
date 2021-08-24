import { Link } from "react-router-dom";

const GameListItem = ({game}) => {

  return (
    <div>
    <Link to={`/games/${game.id}`} className="game-list-link">{game.name}</Link>
    <img src={game.thumbnailUrl} alt={game.name}></img>
    </div>
  )
}

export default GameListItem;