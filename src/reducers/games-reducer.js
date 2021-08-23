import { FETCH_GAME } from '../constants';
import { xml2json } from 'xml-js';

const boardGamesReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_GAME:
      const jsonData = xml2json(action.payload.data, {compact: false, spaces: 4});
      console.log(jsonData);
      return state;
    default:
        return state;
  }
};

export default boardGamesReducer;