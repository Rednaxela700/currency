import React from 'react';
import { Segment, Button } from 'semantic-ui-react';

const styles = {
  container: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  currencyName: { minWidth: '25%', margin: '0' },
  price: { minWidth: '100px' },
  btn: { minWidth: '93px' },
};
export default function CurrencyItem() {
  return (
    <Segment attached>
      <div style={styles.container}>
        <p style={styles.currencyName}>Currency</p>
        <div style={styles.price}>
          <span>100zł</span>
          {' / '}
          <span>3000zł</span>
        </div>
        <Button positive>Add</Button>
      </div>
    </Segment>
  );
}
