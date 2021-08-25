import { FETCH_GAMES_ERROR } from "../constants";

const errorReducer = (state = '', action) => {
  switch (action.type) {
    case FETCH_GAMES_ERROR:
      console.log(action.payload[0]);
      return `Unable to find game '${action.payload[1]}'`;
    default:
      return state;
  }
}

export default errorReducer;