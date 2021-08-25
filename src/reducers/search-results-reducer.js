import { isArray } from 'lodash';
import { FETCH_GAMES_BY_ID_SUCCESS, CLEAR_RESULTS } from "../constants";

const searchResultsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_GAMES_BY_ID_SUCCESS:

      const results = action.payload.map(game => {
        const id = game._attributes.id;

        return {
          id: parseInt(id, 10),
          name: isArray(game.name) ? game.name[0]._attributes.value : game.name._attributes.value,
          imgUrl: game?.image?._text ? game.image._text : '',
          thumbnailUrl: game?.thumbnail?._text ? game.thumbnail._text : '',
          bggUrl: `https://boardgamegeek.com/boardgame/${id}`
        }
      })

      return results;
    
    case CLEAR_RESULTS:
      return [];

    default:
      return state;
  }
}

export default searchResultsReducer;
