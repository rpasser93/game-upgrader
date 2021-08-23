import { FETCH_GAME } from '../constants';
import { xml2js } from 'xml-js';
import { isArray } from 'lodash';

const boardGamesReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_GAME:
      const jsonData = xml2js(action.payload.data, {compact: true, spaces: 4});
      const gameData = jsonData.items.item;

      const currentId = state.length + 1;

      let gameId = '';
      let name = '';

      if (isArray(gameData)) {
        gameId = gameData[0]._attributes.id;
        name = gameData[0].name._attributes.value;
      } else {
        gameId = gameData._attributes.id;
        name = gameData.name._attributes.value;
      }

      const game = {
        id: currentId,
        gameId: gameId,
        name: name
      }

      return [...state, game];
    default:
        return state;
  }
};

export default boardGamesReducer;