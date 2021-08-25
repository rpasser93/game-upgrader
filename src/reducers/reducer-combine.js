import { combineReducers } from "redux";
import errorsReducer from "./errors-reducer";
import boardGamesReducer from './games-reducer';
import searchResultsReducer from "./search-results-reducer";

const rootReducer = combineReducers({
  games: boardGamesReducer,
  searchResults: searchResultsReducer,
  errors: errorsReducer
})

export default rootReducer;