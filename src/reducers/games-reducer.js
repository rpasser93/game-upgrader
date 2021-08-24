import { ADD_GAME} from '../constants';

const boardGamesReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_GAME:
      const currentId = state.length + 1;
      action.payload.id = currentId;

      return [...state, action.payload];
    default:
        return state;
  }
};

export default boardGamesReducer;