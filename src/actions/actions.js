import axios from 'axios';
import { FETCH_GAME, FETCH_GAME_BY_ID, ROOT_URL, ID_FETCH_URL } from '../constants';

export function fetchGame(query) {
  const request = axios.get(`${ROOT_URL}${query}`);
  
  return {
    type: FETCH_GAME,
    payload: request
  };
}

export function fetchGameById(gameId) {
  const request = axios.get(`${ID_FETCH_URL}${gameId}`)

  return {
    type: FETCH_GAME_BY_ID,
    payload: request
  }
}
