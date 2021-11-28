import { createStore } from "redux";

const INITIAL_STATE = {
  amount: 0,
  total: 0,
  minPriceFilter: -1,
  maxPriceFilter: -1,
};

const cart = (state: any = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case "ADD_AMOUNT":
      return { ...state, amount: action.amount };

    case "ADD_TOTAL_VALUE":
      return { ...state, total: action.total };

    case "ADD_MIN_FILTER":
      return { ...state, minPriceFilter: action.minPriceFilter };

    case "ADD_MAX_FILTER":
      return { ...state, maxPriceFilter: action.maxPriceFilter };

    case "DEL_MIN_FILTER":
      return { ...state, minPriceFilter: -1 };

    case "DEL_MAX_FILTER":
      return { ...state, maxPriceFilter: -1 };

    default:
      return state;
  }
};

const store = createStore(cart);

export default store;
