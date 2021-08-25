import { combineReducers } from "redux";
import errorReducer from "./error-reducer";
import boardGamesReducer from './games-reducer';
import searchResultsReducer from "./search-results-reducer";

const rootReducer = combineReducers({
  games: boardGamesReducer,
  searchResults: searchResultsReducer,
  errors: errorReducer
})

export default rootReducer;