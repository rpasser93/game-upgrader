import { FETCH_GAMES_BY_ID_SUCCESS } from "../constants";

const searchResultsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_GAMES_BY_ID_SUCCESS:
      console.log(action.payload);
      return state;

    default:
      return state;
  }
}

export default searchResultsReducer;
