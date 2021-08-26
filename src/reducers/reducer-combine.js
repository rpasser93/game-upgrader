import { combineReducers } from "redux";
import errorsReducer from "./errors-reducer";
import etsyAdditionsReducer from "./etsy-additions-reducers";
import expansionsReducer from "./expansions-reducer";
import boardGamesReducer from './games-reducer';
import searchResultsReducer from "./search-results-reducer";

const rootReducer = combineReducers({
  games: boardGamesReducer,
  searchResults: searchResultsReducer,
  expansions: expansionsReducer,
  etsyAdditions: etsyAdditionsReducer,
  errors: errorsReducer
})

export default rootReducer;