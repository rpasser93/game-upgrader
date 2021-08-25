import axios from 'axios';
import _ from 'lodash';
import { xml2js } from 'xml-js';
import { ID_FETCH_URL, FETCH_MULTIPLE_URL, FETCH_GAMES_BY_ID_SUCCESS, 
  ADD_GAME, CLEAR_RESULTS, REMOVE_GAME, FETCH_GAMES_ERROR, CLEAR_ERROR, 
  FETCH_GAMES_BY_ID_ERROR } from '../constants';

// Fetches multiple games according to a query and dispatches another action with the fetched ids
export function fetchGames(query) {
  return (dispatch) => {
    axios.get(`${FETCH_MULTIPLE_URL}${query}`)
    .then(response => {

      const data = xml2js(response.data, {compact: true, space: 4});

      const ids = data.items.item.map((game) => {
        return game._attributes.id
      })
      
      // Avoid duplicate ids
      dispatch(fetchGamesByIds(_.uniq(ids)));
    })
    .catch(error => {
      dispatch(fetchGamesError(error, query));
    })
  }
}

// Fetches games using a supplied array of ids
export function fetchGamesByIds(ids) {
  return (dispatch) => {
    axios.get(`${ID_FETCH_URL}${ids.join()}`)
    .then(response => {
      
      const data = xml2js(response.data, {compact: true, space: 4});
      const games = data.items.item;
      
      dispatch(fetchGamesByIdsSuccess(games));
    })
    .catch(error => {
      dispatch(fetchGamesByIdsError(error));
    })
  }
}

// Action creator for id fetch success
export function fetchGamesByIdsSuccess(games) {
  return {
    type: FETCH_GAMES_BY_ID_SUCCESS,
    payload: games
  }
}

// Action creator for query fetch errors
export function fetchGamesError(error, query) {
  return {
    type: FETCH_GAMES_ERROR,
    payload: [error, query]
  }
}

export function fetchGamesByIdsError(error) {
  return {
    type: FETCH_GAMES_BY_ID_ERROR,
    payload: error
  }
}

// Action creator for adding a game to the store
export function addGame(game) {
  return {
    type: ADD_GAME,
    payload: game
  }
}

// Action creator for removing a game from the store
export function removeGame(id) {
  return {
    type: REMOVE_GAME,
    payload: id
  }
}

// Action creator for clearing the search results
export function clearResults() {
  return {
    type: CLEAR_RESULTS
  }
}

// Action creator for clearing error messages
export function clearError() {
  return {
    type: CLEAR_ERROR
  }
}
