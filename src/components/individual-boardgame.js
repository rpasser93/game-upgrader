import { useSelector } from "react-redux";
import {useDispatch} from 'react-redux';
import {removeGame } from '../actions/actions';
import { BACK_ARROW_IMG, REMOVE_GAME_IMG } from '../constants';
import _ from 'lodash';

const IndividualBoardgame = ({id, history}) => {
  const games = useSelector((state) => state.games);
  const dispatch = useDispatch();

  const handleBackClick = () => {
    history.push('/games');
  }

  const handleRemoveClick = () => {
    if (window.confirm('Are you sure you want to remove this game from your shelf?')) {
      dispatch(removeGame(game.id));
      history.push('/games');
    }
  }

  if (!_.find(games, {id: id}))
    return <h1 className="text-center not-found">Game not found :(</h1>

  const game = games.find((current) => {
    return current.id === id;
  })

  const renderExpansions = () => {
    
  }

  return (
    <div className="container">
      <div className="row align-content-start">
        <div className="col-4">
          <img src={BACK_ARROW_IMG} alt= "" className="back-arrow-image rounded float-end" onClick={handleBackClick} />
        </div>
        <div className="col-4">
          <img src={game.imgUrl} alt="" className="ind-game-image mx-auto d-block" />
          <br></br>
          <h1 className="text-center">{game.name}</h1>
          <a href={game.bggUrl} className="bgg-link" target="blank">BGG Link</a>
        </div>
        <div className="col-4">
          <img src={REMOVE_GAME_IMG} alt= "" className="remove-game-image" onClick={handleRemoveClick} />
        </div>
      </div>
      {renderExpansions()};
    </div>
  )
}

export default IndividualBoardgame;