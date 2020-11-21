import React, { useReducer } from 'react';
import { SET_MODAL_OPEN, SET_MODAL_DATA, SET_MODAL_MESSAGE } from '../types';
import ModalContext from './modalContext';
import ModalReducer from './modalReducer';
// eslint-disable-next-line
const ModalState = ({ children }) => {
  const initialState = {
    modalOpen: false,
    modalData: null,
    modalMessage: '',
  };
  const [state, dispatch] = useReducer(ModalReducer, initialState);

  const setModalOpen = (flag) => {
    dispatch({ type: SET_MODAL_OPEN, payload: !!flag });
  };

  const setModalData = (data) => {
    dispatch({
      type: SET_MODAL_DATA,
      payload: data,
    });
  };

  const setModalMessage = (msg) =>
    dispatch({
      type: SET_MODAL_MESSAGE,
      payload: msg,
    });

  return (
    <ModalContext.Provider
      value={{
        modalOpen: state.modalOpen,
        modalData: state.modalData,
        modalMessage: state.modalMessage,
        setModalOpen,
        setModalData,
        setModalMessage,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalState;
