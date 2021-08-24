import { FETCH_GAME_BY_ID } from "../constants";
import { xml2js } from "xml-js";

const gameIdReducer = (state = {}, action) => {
  switch(action.type) {
    case FETCH_GAME_BY_ID:
      const jsonData = xml2js(action.payload.data, {compact: true, spaces: 4});
      const gameData = jsonData.items.item;
      
      const game = {
        gameId: gameData._attributes.id,
        name: gameData.name[0]._attributes.value,
        imgUrl: gameData.image._text,
      }

      return game;
    default:
      return state;
  }
}

export default gameIdReducer;