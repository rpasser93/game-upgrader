import { CLEAR_ERROR, FETCH_GAMES_ERROR, FETCH_GAMES_BY_ID_ERROR,
   FETCH_EXPANSIONS_ERROR, FETCH_ETSY_ADDITIONS_ERROR } from "../constants";

const errorsReducer = (state = '', action) => {
  switch (action.type) {
    case FETCH_GAMES_ERROR:
      return `Unable to find game "${action.payload[1]}".`;     
    case FETCH_GAMES_BY_ID_ERROR:
      return 'Error: ID request failed.';
    case FETCH_EXPANSIONS_ERROR:
      return 'No expansions found.';
    case FETCH_ETSY_ADDITIONS_ERROR:
      return 'No additions found';   
    case CLEAR_ERROR:
      return '';
    default:
      return state;
  }
}

export default errorsReducer;