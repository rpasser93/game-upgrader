import { useSelector } from "react-redux";
import { BACK_ARROW_IMG } from '../constants';
import _ from 'lodash';

const IndividualBoardgame = ({id, history}) => {
  const games = useSelector((state) => state.games);

  const handleClick = () => {
    history.push('/games');
  }

  if (!_.find(games, {id: id}))
    return <h1>Game not found</h1>

  const game = games.find((current) => {
    return current.id === id;
  })

  console.log(game);

  return (
    <div className="container">
      <div className="row align-content-start">
        <div className="col-4">
          <img src={BACK_ARROW_IMG} alt= "" className="back-arrow-image rounded float-end" onClick={handleClick} />
        </div>
        <div className="col-4">
          <img src={game.imgUrl} alt="" className="ind-game-image mx-auto d-block" />
          <br></br>
          <h1 className="text-center">{game.name}</h1>
        </div>
      </div>
    </div>
  )
}

export default IndividualBoardgame;