import React, { useContext } from 'react';
import { Segment, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import CurrenciesContext from '../context/currencies/currenciesContext';
import { mainStyles } from './pages/Main';

export const firstLetterToUppercase = (string) => string.charAt(0).toUpperCase() + string.slice(1);

export default function CurrencyItem({ data: { currency, code, ask, bid }, handleSubmit }) {
  const currenciesContext = useContext(CurrenciesContext);
  const { favourites } = currenciesContext;

  const currencyName = firstLetterToUppercase(currency);
  const sellPrice = ask.toFixed(2);
  const buyPrice = bid.toFixed(2);

  const CurrentBtn = () => {
    if (favourites && favourites.find((favedCurrency) => favedCurrency.code === code)) {
      return (
        <Button type="submit" negative>
          Remove
        </Button>
      );
    }
    return (
      <Button type="submit" positive>
        Add
      </Button>
    );
  };

  return (
    <Segment attached>
      <form
        style={mainStyles.header}
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(code);
        }}
      >
        <p style={mainStyles.heading}>
          {code} - {currencyName}
        </p>
        <div style={mainStyles.prices}>
          <span>{sellPrice}zł</span>
          {' / '}
          <span>{buyPrice}zł</span>
        </div>
        <div style={mainStyles.btn}>
          <CurrentBtn />
        </div>
      </form>
    </Segment>
  );
}

CurrencyItem.propTypes = {
  data: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
