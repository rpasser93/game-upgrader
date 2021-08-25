import axios from 'axios';
import _ from 'lodash';
import { xml2js } from 'xml-js';
import { ID_FETCH_URL, FETCH_MULTIPLE_URL, FETCH_GAMES_BY_ID_SUCCESS, 
  ADD_GAME, CLEAR_RESULTS, REMOVE_GAME, FETCH_GAMES_ERROR, CLEAR_ERROR, 
  FETCH_GAMES_BY_ID_ERROR, FETCH_EXPANSIONS_SUCCESS, CLEAR_EXPANSIONS} from '../constants';

// Function that retrieves ids from xml responses
const getIdsFromXML = (xml) => {
  const data = xml2js(xml, {compact: true, space: 4});
  return data.items.item.map((game) => {
    return game._attributes.id
  })
}

// Function that converts game data from xml to js object
const getGameDataFromXML = (xml) => {
  const data = xml2js(xml, {compact: true, space: 4});
  return data.items.item;
}

// Fetches multiple games according to a query and dispatches another action with the fetched ids
export function fetchGames(query) {
  return (dispatch) => {
    axios.get(`${FETCH_MULTIPLE_URL}${query}`)
    .then(response => {

      // Avoid duplicate ids
      dispatch(fetchGamesByIds(_.uniq(getIdsFromXML(response.data))));
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
  return (dispatch) => {
    axios.get(`${ID_FETCH_URL}${ids.join()}`)
    .then(response => {
      dispatch(fetchExpansionsByIdsSuccess(getGameDataFromXML(response.data)));
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

// Action creator for clearing error messages
export function clearError() {
  return {
    type: CLEAR_ERROR
  }
}