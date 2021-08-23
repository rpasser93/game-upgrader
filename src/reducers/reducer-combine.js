import { FETCH_GAME } from '../constants';

const boardGamesReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_GAME:
      console.log(action.payload.data);
      return state;
      default:
        return state;
  }
};

export default boardGamesReducer