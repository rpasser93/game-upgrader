import { CLEAR_ERROR, FETCH_GAMES_ERROR, FETCH_GAMES_BY_ID_ERROR } from "../constants";

const errorsReducer = (state = '', action) => {
  switch (action.type) {
    case FETCH_GAMES_ERROR:
      return `Unable to find game "${action.payload[1]}".`;
      
    case FETCH_GAMES_BY_ID_ERROR:
      return 'Error: ID request failed.';
    case CLEAR_ERROR:
      return '';
    default:
      return state;
  }
}

export default errorsReducer;