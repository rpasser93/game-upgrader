import { FETCH_GAME } from '../constants';
import { xml2js } from 'xml-js';

const boardGamesReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_GAME:
      const jsonData = xml2js(action.payload.data, {compact: true, spaces: 4});

      console.log(jsonData);

      const game = {
        id: jsonData.items.item._attributes.id,
        name: jsonData.items.item.name._attributes.value
      }

      return [...state, game];
    default:
        return state;
  }
};

export default boardGamesReducer;