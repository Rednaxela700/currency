import React, { useReducer } from 'react';

import CurrenciesContext from './currenciesContext';
import CurrenciesReducer from './currenciesReducer';

import { SET_CURRENCIES } from '../types';
// eslint-disable-next-line
const CurrenciesState = ({ children }) => {
  const initialState = {
    currencies: null,
  };
  const [state, dispatch] = useReducer(CurrenciesReducer, initialState);

  // Actions

  const setCurrencies = (data) => {
    dispatch({
      type: SET_CURRENCIES,
      payload: data,
    });
  };
  return (
    <CurrenciesContext.Provider value={{ currencies: state.currencies, setCurrencies }}>
      {children}
    </CurrenciesContext.Provider>
  );
};

export default CurrenciesState;
