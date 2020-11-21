import { SET_MODAL_OPEN } from '../types';

export default (state, { type, payload }) => {
  switch (type) {
    case SET_MODAL_OPEN:
      return {
        ...state,
        modalOpen: payload,
      };
  }
};
