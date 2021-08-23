import { combineReducers } from "redux";
import boardGamesReducer from './games-reducer';

const rootReducer = combineReducers({
  games: boardGamesReducer,
})

export default rootReducer;
