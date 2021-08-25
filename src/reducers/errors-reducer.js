import { CLEAR_ERROR, FETCH_GAMES_ERROR } from "../constants";

const errorsReducer = (state = '', action) => {
  switch (action.type) {
    case FETCH_GAMES_ERROR:
      console.log(action.payload[0]);
      return `Unable to find game '${action.payload[1]}'`;
    case CLEAR_ERROR:
      return '';
    default:
      return state;
  }
}

export default errorsReducer;