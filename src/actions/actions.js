import axios from 'axios';
import _ from 'lodash';
import { xml2js } from 'xml-js';

import { ID_FETCH_URL, FETCH_MULTIPLE_URL, FETCH_GAMES_BY_ID_SUCCESS, 
  ADD_GAME, CLEAR_RESULTS, REMOVE_GAME, FETCH_GAMES_ERROR, CLEAR_ERROR, 
  FETCH_GAMES_BY_ID_ERROR, FETCH_EXPANSIONS_SUCCESS, CLEAR_EXPANSIONS, FETCH_EXPANSIONS_ERROR,
ETSY_SEARCH_URL, FETCH_ETSY_ADDITIONS_SUCCESS, CLEAR_ETSY_ADDITIONS} from '../constants';

// Function that retrieves ids from xml responses
const getIdsFromXML = (xml, type) => {
  const data = xml2js(xml, {compact: true, space: 4});
  const ids = data.items.item.map((game) => {
    return game._attributes.id
  })

  // Only get the first 48 game results
  // This could be a temporary fix until we figure out pagination
  if (ids.length > 48 && type === 'game')
    return ids.slice(0, 48);
  
  return ids;
}

// Function that returns fetched ids that don't exist in the store
const getUniqueIds = (ids, getState) => {
  const games = getState().games;
  const existingIds = games.map((curr) => {
    return curr.id;
  })

  return ids.filter(val => !existingIds.includes(parseInt(val)));
}

// Function that converts game data from xml to js object
const getGameDataFromXML = (xml) => {
  const data = xml2js(xml, {compact: true, space: 4});
  return data.items.item;
}

// Fetches multiple games according to a query and dispatches another action with the fetched ids
export function fetchGames(query) {
  return (dispatch, getState) => {
    axios.get(`${FETCH_MULTIPLE_URL}${query}`)
    .then(response => {

      // Avoid duplicate ids
      const ids = _.uniq(getIdsFromXML(response.data, 'game'));

      dispatch(fetchGamesByIds(getUniqueIds(ids, getState)));
    })
    .catch(error => {
      dispatch(fetchGamesError(error, query));
    })
  }
}

// Fetches games using a supplied array of ids
const fetchGamesByIds = (ids) => {
  return (dispatch) => {
    axios.get(`${ID_FETCH_URL}${ids.join()}`)
    .then(response => {
      dispatch(fetchGamesByIdsSuccess(getGameDataFromXML(response.data)));
    })
    .catch(error => {
      dispatch(fetchGamesByIdsError(error));
    })
  }
}

// Fetches expansions using a supplied array of ids
export function fetchExpansionsByIds(ids) {
  return (dispatch, getState) => {
    const newIds = getUniqueIds(ids, getState);

    axios.get(`${ID_FETCH_URL}${newIds.join()}`)
    .then(response => {
      dispatch(fetchExpansionsByIdsSuccess(getGameDataFromXML(response.data)));
    })
    .catch(error => {
      dispatch(fetchExpansionsByIdsError(error));
    })
  }
}

// Fetches any additions for a game on etsy
export function fetchEtsyAdditions(game) {
  return (dispatch) => {
    axios.get(`${ETSY_SEARCH_URL}${game}`)
    .then(response => {
      dispatch(fetchEtsyAdditionsSuccess(response));
    })
    .catch(error => {
      console.log(error);
    })
  }
}

// Action creator for game id fetch success
export function fetchGamesByIdsSuccess(games) {
  return {
    type: FETCH_GAMES_BY_ID_SUCCESS,
    payload: games
  }
}

// Action creator for expansion id fetch success
export function fetchExpansionsByIdsSuccess(expansions) {
  return {
    type: FETCH_EXPANSIONS_SUCCESS,
    payload: expansions
  }
}

// Action creator for succesful etsy additions fetch
export function fetchEtsyAdditionsSuccess(additions) {
  return {
    type: FETCH_ETSY_ADDITIONS_SUCCESS,
    payload: additions
  }
}

// Action creator for query fetch errors
export function fetchGamesError(error, query) {
  return {
    type: FETCH_GAMES_ERROR,
    payload: [error, query]
  }
}

// Action creator for id fetch errors
export function fetchGamesByIdsError(error) {
  return {
    type: FETCH_GAMES_BY_ID_ERROR,
    payload: error
  }
}

// Action creator for expansion id fetch errors
export function fetchExpansionsByIdsError(error) {
  return {
    type: FETCH_EXPANSIONS_ERROR,
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

// Action creator for clearing the expansions
export function clearExpansions() {
  return {
    type: CLEAR_EXPANSIONS
  }
}

// Action creator for clearing the etsy additions
export function clearEtsyAdditions() {
  return {
    type: CLEAR_ETSY_ADDITIONS
  }
}

// Action creator for clearing error messages
export function clearError() {
  return {
    type: CLEAR_ERROR
  }
}