import axios from 'axios';
import _ from 'lodash';
import { isArray } from 'lodash';
import { xml2js } from 'xml-js';
import { ROOT_URL, ID_FETCH_URL, FETCH_MULTIPLE_URL, FETCH_GAME_BY_ID_SUCCESS, FETCH_GAMES_BY_ID_SUCCESS, ADD_GAME } from '../constants';

// Fetches a game based on a search query and dispatches fetchGameById with the result's id attribute
// export function fetchGame(query) {
//   return (dispatch) => {
//     axios.get(`${ROOT_URL}${query}`)
//     .then(response => {
//       const data = xml2js(response.data, {compact: true, space: 4});
//       const item = data.items.item;

//       // If more than one item gets fetched, use the first one
//       if (isArray(item))
//         dispatch(fetchGameById(item[0]._attributes.id))
//       else
//         dispatch(fetchGameById(item._attributes.id));
//     })

//     // We can dispatch error handling at this stage
//     .catch(error => {
//       console.log(error);
//     }) 
//   }
// }

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

// Fetches a game based off of a supplied id and dispatches fetchGameIdSuccess with the result
// export function fetchGameById(gameId) {
//   return (dispatch) => {
//     axios.get(`${ID_FETCH_URL}${gameId}`)
//     .then(response => {
//       const game = xml2js(response.data, {compact: true, space: 4});
//       dispatch(fetchGameByIdSuccess(game));
//     })
//     .catch(error => {
//       console.log(error);
//     })
//   }
// }

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

// Action creator for adding a game to the gamesReducer
// export function fetchGameByIdSuccess(game) {
//   return {
//     type: FETCH_GAME_BY_ID_SUCCESS,
//     payload: game
//   }
// }

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
