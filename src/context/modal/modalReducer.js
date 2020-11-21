import { SET_MODAL_OPEN, SET_MODAL_DATA, SET_MODAL_MESSAGE } from '../types';

export default (state, { type, payload }) => {
  switch (type) {
    case SET_MODAL_OPEN:
      return {
        ...state,
        modalOpen: payload,
      };
    case SET_MODAL_DATA:
      return {
        ...state,
        modalData: payload,
      };
    case SET_MODAL_MESSAGE:
      return {
        ...state,
        modalMessage: payload,
      };
  }
};
