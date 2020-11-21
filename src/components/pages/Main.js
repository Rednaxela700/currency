import React, { useContext, useEffect, Fragment, useState } from 'react';
import { Container, Header, Grid } from 'semantic-ui-react';
import { FETCH_RATES } from '../../api';
import useDataFetching from '../../hooks/useDataFetch';
import CurrencyItem from '../CurrencyItem';
import CurrenciesContext from '../../context/currencies/currenciesContext';
import Loader from '../Loader';
import Modal from '../Modal';

export const mainStyles = {
  container: { padding: '5em 0em' },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
};
export default function Main() {
  const [modalOpen, setModalOpen] = useState(true);
  const currenciesContext = useContext(CurrenciesContext);
  const { setCurrencies, currencies } = currenciesContext;

  const { loading, results } = useDataFetching(`${process.env.REACT_APP_API_KEY}${FETCH_RATES}`);
  useEffect(() => {
    if (!currencies) {
      setCurrencies(results[0]);
    }
  }),
    [];
  if (loading) return <Loader />;

  const { rates, effectiveDate } = currencies;
  return (
    <Fragment>
      <Container as="section" style={mainStyles.container}>
        <Header as="h2">Currencies from: {effectiveDate}</Header>
        <Grid.Column>
          {rates.map((currency) => (
            <CurrencyItem key={currency.code} data={currency} />
          ))}
        </Grid.Column>
      </Container>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </Fragment>
  );
}
