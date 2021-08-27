const API_KEY = process.env.REACT_APP_API_KEY;

export const FETCH_GAMES_BY_ID_SUCCESS = "FETCH_GAMES_BY_ID_SUCCESS";
export const FETCH_GAMES_BY_ID_ERROR = "FETCH_GAMES_BY_ID_ERROR";
export const REMOVE_GAME = "REMOVE_GAME";
export const ADD_GAME = "ADD_GAME";
export const FETCH_EXPANSIONS_SUCCESS = "FETCH_EXPANSIONS_SUCCESS";
export const FETCH_EXPANSIONS_ERROR = "FETCH_EXPANSIONS_ERROR";
export const CLEAR_EXPANSIONS = "CLEAR_EXPANSIONS";
export const FETCH_GAMES_ERROR = "FETCH_GAMES_ERROR";
export const CLEAR_RESULTS = "CLEAR_RESULTS";
export const CLEAR_ERROR = "CLEAR_ERROR";
export const FETCH_ETSY_ADDITIONS_SUCCESS = "FETCH_ETSY_ADDITIONS_SUCCESS";
export const FETCH_ETSY_ADDITIONS_ERROR = "FETCH_ETSY_ADDITIONS_ERROR";
export const CLEAR_ETSY_ADDITIONS = "CLEAR_ETSY_ADDITIONS";
export const FETCH_GAMES_ALL_ON_SHELF = "FETCH_GAMES_ALL_ON_SHELF";
export const ID_FETCH_URL = "https://www.boardgamegeek.com/xmlapi2/thing?&stats=1&id=";
export const ETSY_SEARCH_URL = `https://openapi.etsy.com/v2/listings/active?api_key=${API_KEY}&limit=5&includes=MainImage&keywords=`
export const BACK_ARROW_IMG = "https://image.flaticon.com/icons/png/512/60/60577.png";
export const REMOVE_GAME_IMG = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHvQzPD7lYrTQvIywYogS50koNq25j2A3K7Q&usqp=CAU";
export const MAG_GLASS_IMG = "https://static.thenounproject.com/png/340642-200.png";
export const FETCH_MULTIPLE_URL = "https://www.boardgamegeek.com/xmlapi2/search?&query=";
export const LOADING_SPINNER_GIF = "https://cdn.dribbble.com/users/6059148/screenshots/14425859/media/3f67e0e620f3818a68a03fdb874b7a56.gif"