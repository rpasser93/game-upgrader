import { isArray } from 'lodash';
import { FETCH_EXPANSIONS_SUCCESS, CLEAR_EXPANSIONS } from "../constants";

const expansionsReducer = (state = [], action) => {
  switch(action.type) {
    case FETCH_EXPANSIONS_SUCCESS:

      let returnState = action.payload;
        
      // If there are more than five expansions, only return the top five
      if (action.payload.length > 5) {
        const topExpansions =  action.payload.sort((a, b) => {
          return parseInt(b.statistics.ratings.owned._attributes.value) - parseInt(a.statistics.ratings.owned._attributes.value);
        }).slice(0, 5);

        returnState = topExpansions;
      }

      const results = returnState.map(expansion => {
        const id = expansion._attributes.id;
        const expansions = expansion.link.filter((curr) => curr._attributes.type === 'boardgameexpansion');
        const expansionIds = expansions.map((expansion) => {
          return parseInt(expansion._attributes.id);
        })

        return {
          id: parseInt(id, 10),
          name: isArray(expansion.name) ? expansion.name[0]._attributes.value : expansion.name._attributes.value,
          imgUrl: expansion?.image?._text ? expansion.image._text : '',
          thumbnailUrl: expansion?.thumbnail?._text ? expansion.thumbnail._text : '',
          bggUrl: `https://boardgamegeek.com/boardgameexpansion/${id}`,
          expansionIds: expansionIds,
        }
      })

      return results;

    case CLEAR_EXPANSIONS:
      return [];

    default:
      return state;
  }
}

export default expansionsReducer;