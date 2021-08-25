import axios from 'axios';
import _ from 'lodash';
import { xml2js } from 'xml-js';
import { ID_FETCH_URL, FETCH_MULTIPLE_URL, FETCH_GAMES_BY_ID_SUCCESS, ADD_GAME, CLEAR_RESULTS, REMOVE_GAME } from '../constants';

export function fetchGames(query) {
  return (dispatch) => {
    axios.get(`${FETCH_MULTIPLE_URL}${query}`)
    .then(response => {

      const data = xml2js(response.data, {compact: true, space: 4});

      const ids = data.items.item.map((game) => {
        return game._attributes.id
      })
      
      dispatch(fetchGamesByIds(_.uniq(ids)));
    })
    .catch(error => {
      console.log(error);
    })
  }
}

export function fetchGamesByIds(ids) {
  return (dispatch) => {
    axios.get(`${ID_FETCH_URL}${ids.join()}`)
    .then(response => {
      
      const data = xml2js(response.data, {compact: true, space: 4});
      const games = data.items.item;
      
      dispatch(fetchGamesByIdsSuccess(games));
    })
  }
}

export function fetchGamesByIdsSuccess(games) {
  return {
    type: FETCH_GAMES_BY_ID_SUCCESS,
    payload: games
  }
}

export function addGame(game) {
  return {
    type: ADD_GAME,
    payload: game
  }
}

// Action creator for removing a game from the store
export function removeGame(gameId) {
  return {
    type: REMOVE_GAME,
    payload: gameId
  }
}

export function clearResults() {
  return {
    type: CLEAR_RESULTS
  }
}
