import { FETCH_GAME_BY_ID_SUCCESS, REMOVE_GAME } from '../constants';

const boardGamesReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_GAME_BY_ID_SUCCESS:
      const gameData = action.payload.items.item;
      const currentId = state.length + 1;

      const game = {
        id: currentId,
        gameId: gameData._attributes.id,
        name: gameData.name[0]._attributes.value,
        imgUrl: gameData.image._text,
        thumbnailUrl: gameData.thumbnail._text
      }

      console.log(game);

      return [...state, game];

      case REMOVE_GAME:
        return state.filter(game => game.id !== action.payload);

    default:
        return state;
  }
};

export default boardGamesReducer;