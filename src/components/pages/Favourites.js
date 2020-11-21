import React, { useContext, Fragment } from 'react';
import { Header, Container } from 'semantic-ui-react';
import CurrenciesContext from '../../context/currencies/currenciesContext';
import ModalContext from '../../context/modal/modalContext';
import CurrencyItem from '../CurrencyItem';
import Modal from '../Modal';
import { mainStyles } from './Main';

export default function Favourites() {
  const currenciesContext = useContext(CurrenciesContext);
  const { favourites, setFavourites } = currenciesContext;

  const modalContext = useContext(ModalContext);
  const { modalData, setModalData, setModalOpen, setModalMessage } = modalContext;

  const handleFavourite = (currencyCode) => {
    setModalOpen(true);
    setModalData(favourites.find((currency) => currency.code === currencyCode));
    setModalMessage(modalData.currency);
  };

  const removeFavourite = (currencyCode) => {
    const updatedFavourites = favourites.filter((removedCurr) => removedCurr.code !== currencyCode);
    setFavourites(updatedFavourites);
  };
  return (
    <Fragment>
      <Container style={mainStyles.container}>
        <Header as="h1">
          {favourites.length == 0
            ? 'No favourites retrieved, add some.'
            : 'Your favourite currencies'}
        </Header>
        {favourites.map((currency) => (
          <CurrencyItem key={currency.currency} data={currency} handleSubmit={handleFavourite} />
        ))}
      </Container>
      <Modal submitAction={removeFavourite} />
    </Fragment>
  );
}
