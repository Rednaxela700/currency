import React, { useReducer } from 'react';
import { SET_MODAL_OPEN } from '../types';
import ModalContext from './modalContext';
import ModalReducer from './modalReducer';
// eslint-disable-next-line
const ModalState = ({ children }) => {
  const initialState = {
    modalOpen: false,
  };
  const [state, dispatch] = useReducer(ModalReducer, initialState);

  const setModalOpen = (flag) => {
    dispatch({ type: SET_MODAL_OPEN, payload: !!flag });
  };
  return (
    <ModalContext.Provider
      value={{
        modalOpen: state.modalOpen,
        setModalOpen,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalState;
