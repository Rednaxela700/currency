import React, { useContext } from 'react';
import { Button, Modal } from 'semantic-ui-react';
import ModalContext from '../context/modal/modalContext';
import PropTypes from 'prop-types';

export default function ModalWrapper({ submitAction }) {
  const modalContext = useContext(ModalContext);
  const {
    modalOpen,
    setModalOpen,
    modalData,
    setModalData,
    modalMessage,
    setModalMessage,
  } = modalContext;
  const currencyCode = modalData ? modalData.code : null;
  return (
    <Modal
      onClose={() => {
        setModalOpen(false);
      }}
      open={modalOpen}
    >
      <Modal.Header>Are you sure?</Modal.Header>
      <Modal.Content>You&apos;re going to delete {modalMessage}.</Modal.Content>
      <Modal.Actions>
        <Button
          color="black"
          onClick={() => {
            setModalOpen(false);
          }}
        >
          Back
        </Button>
        <Button
          content="Delete Content"
          labelPosition="right"
          icon="checkmark"
          onClick={() => {
            setModalOpen(false);
            submitAction(currencyCode);
            setModalData(null);
            setModalMessage('');
          }}
          negative
        />
      </Modal.Actions>
    </Modal>
  );
}

ModalWrapper.propTypes = {
  submitAction: PropTypes.func.isRequired,
};
