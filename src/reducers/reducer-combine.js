import { combineReducers } from "redux";
import boardGamesReducer from './games-reducer';
import searchResultsReducer from "./search-results-reducer";

const rootReducer = combineReducers({
  games: boardGamesReducer,
  searchResults: searchResultsReducer
})

export default rootReducer;
