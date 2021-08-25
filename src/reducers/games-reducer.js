import { REMOVE_GAME, ADD_GAME } from '../constants';    //add REMOVE GAME back in below

const boardGamesReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_GAME:
      return [...state, action.payload];
    case REMOVE_GAME:
      return state.filter(game => game.id !== action.payload );
    default:
        return state;
  }
};

export default boardGamesReducer;