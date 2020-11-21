import { SET_CURRENCIES, SET_FAVOURITES } from '../types';

export default (state, { type, payload }) => {
  switch (type) {
    case SET_CURRENCIES:
      return {
        ...state,
        currencies: payload,
      };
    case SET_FAVOURITES:
      return {
        ...state,
        favourites: payload,
      };
    default:
      return state;
  }
};
