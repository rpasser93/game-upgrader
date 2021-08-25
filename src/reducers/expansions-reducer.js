import { FETCH_EXPANSIONS_SUCCESS } from "../constants";

const expansionsReducer = (state = [], action) => {
  switch(action.type) {
    case FETCH_EXPANSIONS_SUCCESS:
      
      const topExpansions =  action.payload.sort((a, b) => {
        return parseInt(b.statistics.ratings.average._attributes.value) - parseInt(a.statistics.ratings.average._attributes.value);
      }).slice(0, 5);

      return topExpansions;
    default:
      return state;
  }
}

export default expansionsReducer;