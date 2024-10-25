import { END_DISCOUNT } from "./actions";

const discountReducer = (state = { isDiscountActive: true }, action) => {
    switch (action.type) {
      case END_DISCOUNT:
        return { ...state, isDiscountActive: false };
      default:
        return state;
    }
  };

export default discountReducer;