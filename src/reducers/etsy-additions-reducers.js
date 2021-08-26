import { FETCH_ETSY_ADDITIONS_SUCCESS } from "../constants";

const etsyAdditionsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_ETSY_ADDITIONS_SUCCESS:
      console.log(action.payload);
      return state;
    default:
      return state;
  }
}

export default etsyAdditionsReducer;