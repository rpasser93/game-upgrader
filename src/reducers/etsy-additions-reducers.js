import { FETCH_ETSY_ADDITIONS_SUCCESS } from "../constants";

const etsyAdditionsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_ETSY_ADDITIONS_SUCCESS:
      const additions = action.payload.data.results.map((addition) => {
        return {
          id: addition.listing_id,
          title: addition.title,
          imgUrl: addition.MainImage.url_170x135
        }
      })
      return additions;
    default:
      return state;
  }
}

export default etsyAdditionsReducer;