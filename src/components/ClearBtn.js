import React, { useContext } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import CurrenciesContext from '../context/currencies/currenciesContext';
import ModalContext from '../context/modal/modalContext';
import Modal from './Modal';

export default function ClearBtn() {
  const currenciesContext = useContext(CurrenciesContext);
  const modalContext = useContext(ModalContext);
  const { setModalOpen, setModalData, setModalMessage } = modalContext;
  const { setFavourites, favourites } = currenciesContext;
  const handleClear = () => {
    setFavourites([]);
    setModalData({ currency: 'All currencies' });
    localStorage.setItem('favouriteCurrencies', '[]');
  };
  return (
    favourites.length > 0 && (
      <div>
        <Button
          negative
          onClick={() => {
            setModalMessage('all currencies');
            setModalOpen(true);
          }}
        >
          <Icon name="trash" />
          Clear All
        </Button>
        <Modal submitAction={handleClear} />
      </div>
    )
  );
}
