import React, { useContext, Fragment } from 'react';
import { Header, Container } from 'semantic-ui-react';
import CurrenciesContext from '../../context/currencies/currenciesContext';
import ModalContext from '../../context/modal/modalContext';
import ClearBtn from '../ClearBtn';
import CurrencyItem from '../CurrencyItem';
import Modal from '../Modal';
import { mainStyles } from './Main';

export default function Favourites() {
  const currenciesContext = useContext(CurrenciesContext);
  const { favourites, setFavourites } = currenciesContext;

  const modalContext = useContext(ModalContext);
  const { modalData, setModalData, setModalOpen, setModalMessage } = modalContext;

  const handleFavourite = (currencyCode) => {
    const pickedCurrency = favourites.find((currency) => currency.code === currencyCode);
    setModalOpen(true);
    setModalData(pickedCurrency);
    setModalMessage(pickedCurrency.currency);
  };

  const removeFavourite = (currencyCode) => {
    const updatedFavourites = favourites.filter((removedCurr) => removedCurr.code !== currencyCode);
    setFavourites(updatedFavourites);
  };
  const HeaderWithFavourites = () => (
    <header style={{ ...mainStyles.header, marginBottom: '1em' }}>
      <Header as="h2" style={mainStyles.heading} content="Your favourite currencies" />
      <p style={mainStyles.prices}>Buy/Sell</p>
      <div style={mainStyles.btnContainer}>
        <ClearBtn />
      </div>
    </header>
  );

  const HeaderWithOutFavourites = () => (
    <header style={{ ...mainStyles.header, marginBottom: '1em' }}>
      <Header as="h2" style={mainStyles.heading} content="No favourites retrieved, add some." />
      <p style={mainStyles.prices}> </p>
      <div style={mainStyles.btnContainer}>
        <ClearBtn />
      </div>
    </header>
  );
  return (
    <Fragment>
      <Container style={mainStyles.container}>
        {favourites.length == 0 ? <HeaderWithOutFavourites /> : <HeaderWithFavourites />}
        {favourites.map((currency) => (
          <CurrencyItem key={currency.currency} data={currency} handleSubmit={handleFavourite} />
        ))}
      </Container>
      {modalData && <Modal submitAction={removeFavourite} />}
    </Fragment>
  );
}
