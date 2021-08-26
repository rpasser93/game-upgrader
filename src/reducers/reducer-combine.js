import { combineReducers } from "redux";
import errorsReducer from "./errors-reducer";
import expansionsReducer from "./expansions-reducer";
import boardGamesReducer from './games-reducer';
import searchResultsReducer from "./search-results-reducer";

const rootReducer = combineReducers({
  games: boardGamesReducer,
  searchResults: searchResultsReducer,
  expansions: expansionsReducer,
  errors: errorsReducer
})

export default rootReducer;