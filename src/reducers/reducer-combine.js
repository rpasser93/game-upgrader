import { combineReducers } from "redux";
import boardGamesReducer from './games-reducer';
import gameIdReducer from "./game-id-reducer";

const rootReducer = combineReducers({
  games: boardGamesReducer,
  gameId: gameIdReducer
})

export default rootReducer;
