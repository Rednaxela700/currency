import { SET_CURRENCIES } from '../types';

export default (state, { type, payload }) => {
  switch (type) {
    case SET_CURRENCIES:
      return {
        ...state,
        currencies: payload,
      };
    default:
      return state;
  }
};
