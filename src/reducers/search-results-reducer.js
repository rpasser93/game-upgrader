import _ from 'lodash';
import { FETCH_GAMES_BY_ID_SUCCESS, CLEAR_RESULTS } from "../constants";

const searchResultsReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_GAMES_BY_ID_SUCCESS:

      const results = action.payload.map(game => {
        const id = game._attributes.id;
        const expansions = game.link.filter((curr) => curr._attributes.type === 'boardgameexpansion');
        const expansionIds = expansions.map((expansion) => {
          return parseInt(expansion._attributes.id);
        })

        return {
          id: parseInt(id, 10),
          name: _.isArray(game.name) ? game.name[0]._attributes.value : game.name._attributes.value,
          imgUrl: game?.image?._text ? game.image._text : '',
          thumbnailUrl: game?.thumbnail?._text ? game.thumbnail._text : '',
          bggUrl: `https://boardgamegeek.com/boardgame/${id}`,
          expansionIds: expansionIds,
          numOwners: game.statistics.ratings.owned._attributes.value
        }
      })

      return results.sort((a, b) => parseInt(b.numOwners) - parseInt(a.numOwners));
    
    case CLEAR_RESULTS:
      return [];

    default:
      return state;
  }
}

export default searchResultsReducer;
