import React, { useContext, useEffect, Fragment } from 'react';
import { Container, Header, Grid } from 'semantic-ui-react';
import { FETCH_RATES } from '../../api';
import useDataFetching from '../../hooks/useDataFetch';
import CurrencyItem from '../CurrencyItem';
import CurrenciesContext from '../../context/currencies/currenciesContext';
import ModalContext from '../../context/modal/modalContext';
import Loader from '../Loader';
import Modal from '../Modal';
import ClearBtn from '../ClearBtn';

export const mainStyles = {
  container: { padding: '5em 0em' },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: '40px',
  },
  heading: { flexBasis: '33%', marginBottom: '0' },
  prices: { flexBasis: '33%', textAlign: 'center', marginBottom: '0' },
  btnContainer: { flexBasis: '33%', display: 'flex', justifyContent: 'flex-end' },
  btn: { minWidth: '6.5rem' },
};
export default function Main() {
  const currenciesContext = useContext(CurrenciesContext);
  const { setCurrencies, currencies, favourites, setFavourites } = currenciesContext;
  const modalContext = useContext(ModalContext);
  const { setModalOpen, modalData, setModalData, setModalMessage } = modalContext;

  const { results } = useDataFetching(`${process.env.REACT_APP_API_KEY}${FETCH_RATES}`);

  useEffect(() => {
    if (!currencies) {
      setCurrencies(results[0]);
      loadFavourites();
    }
  }),
    [];

  const loadFavourites = () => {
    const loaded = JSON.parse(localStorage.getItem('favouriteCurrencies')) || [];
    setFavourites(loaded);
  };

  if (!currencies) return <Loader />;

  const saveFavourites = (faved) => {
    setFavourites(faved);
    localStorage.setItem('favouriteCurrencies', JSON.stringify(faved));
  };
  const addFavourite = (currencyCode) => {
    const currencyObj = rates.find((curr) => curr.code === currencyCode);
    const newFavourites = [...favourites, { ...currencyObj, effectiveDate }];
    saveFavourites(newFavourites);
  };
  const removeFavourite = (removedCurrency) => {
    const updatedFavourites = favourites.filter(
      (removedCurr) => removedCurr.code !== removedCurrency.code,
    );
    saveFavourites(updatedFavourites);
  };
  const handleFavourite = (code) => {
    const inFavourites = favourites.find((favedCurrency) => favedCurrency.code === code);
    if (inFavourites) {
      setModalData(inFavourites);
      setModalMessage(inFavourites.currency);
      setModalOpen(true);
    } else {
      addFavourite(code);
    }
  };
  const { rates, effectiveDate } = currencies;
  return (
    <Fragment>
      <Container as="section" style={mainStyles.container}>
        <header style={{ ...mainStyles.header, marginBottom: '1em' }}>
          <Header as="h2" style={mainStyles.heading}>
            Currencies from: {effectiveDate}
          </Header>
          <p style={mainStyles.prices}>Buy/Sell</p>
          <div style={mainStyles.btnContainer}>
            <ClearBtn />
          </div>
        </header>
        <Grid.Column>
          {rates.map((currency) => (
            <CurrencyItem key={currency.code} data={currency} handleSubmit={handleFavourite} />
          ))}
        </Grid.Column>
      </Container>
      {modalData && <Modal submitAction={removeFavourite} />}
    </Fragment>
  );
}
