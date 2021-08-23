import { useSelector } from "react-redux";
import _ from 'lodash';
import GameListItem from "./game-list-item";

const BoardGameList = () => {
  const games = useSelector((state) => state.games);

  const renderGames = () => {
    if (!_.isEmpty(games)) {
      return games.map((game) => {
        console.log(game);
        return (<div key={game.id} className="col-md-3 offset-md-3">
            <GameListItem game={game}/>          
          </div>
        )
      });
    }
  }

  return (
    <div className="games-list">
      <div className="row">
        {renderGames()}
      </div>
    </div>
  )
}

export default BoardGameList;