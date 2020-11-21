import React from 'react';
import { Segment, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const styles = {
  container: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  currencyName: { minWidth: '25%', margin: '0' },
  price: { minWidth: '100px' },
  btn: { minWidth: '93px' },
};
export const firstLetterToUppercase = (string) => string.charAt(0).toUpperCase() + string.slice(1);

export default function CurrencyItem({ data: { currency, code, ask, bid }, handleSubmit }) {
  const currencyName = firstLetterToUppercase(currency);
  const sellPrice = ask.toFixed(2);
  const buyPrice = bid.toFixed(2);
  return (
    <Segment attached>
      <form
        style={styles.container}
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(code);
        }}
      >
        <p style={styles.currencyName}>
          {code} - {currencyName}
        </p>
        <div style={styles.price}>
          <span>{sellPrice}zł</span>
          {' / '}
          <span>{buyPrice}zł</span>
        </div>
        <Button type="submit" style={styles.btn} positive>
          Add
        </Button>
      </form>
    </Segment>
  );
}

CurrencyItem.propTypes = {
  data: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
