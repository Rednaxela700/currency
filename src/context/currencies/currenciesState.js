import React, { useReducer } from 'react';

import CurrenciesContext from './currenciesContext';
import CurrenciesReducer from './currenciesReducer';

import { SET_CURRENCIES, SET_FAVOURITES } from '../types';
// eslint-disable-next-line
const CurrenciesState = ({ children }) => {
  const initialState = {
    currencies: null,
    favourites: [],
  };
  const [state, dispatch] = useReducer(CurrenciesReducer, initialState);

  // Actions
  const setCurrencies = (data) => {
    dispatch({
      type: SET_CURRENCIES,
      payload: data,
    });
  };

  const setFavourites = (faved) => {
    dispatch({
      type: SET_FAVOURITES,
      payload: faved,
    });
  };

  return (
    <CurrenciesContext.Provider
      value={{
        currencies: state.currencies,
        favourites: state.favourites,
        setCurrencies,
        setFavourites,
      }}
    >
      {children}
    </CurrenciesContext.Provider>
  );
};

export default CurrenciesState;
