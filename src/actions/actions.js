import axios from 'axios';
import { FETCH_GAME, ROOT_URL } from '../constants';

export function fetchGame(query) {
  const request = axios.get(`${ROOT_URL}${query}`);
  
  return {
    type: FETCH_GAME,
    payload: request
  };
}
