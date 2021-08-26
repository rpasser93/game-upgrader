import { REMOVE_GAME, ADD_GAME } from '../constants';
import _ from 'lodash';

const boardGamesReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_GAME:
      const games = [...state, action.payload];
      return _.sortBy(games, 'name');
    case REMOVE_GAME:
      return state.filter(game => game.id !== action.payload );
    default:
        return state;
  }
};

export default boardGamesReducer;