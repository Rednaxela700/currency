import React, { useContext } from 'react';
import { Button, Modal } from 'semantic-ui-react';
import ModalContext from '../context/modal/modalContext';

export default function ModalWrapper({}) {
  const modalContext = useContext(ModalContext);
  const { modalOpen, setModalOpen } = modalContext;

  return (
    <Modal onClose={() => setModalOpen(false)} open={modalOpen}>
      <Modal.Header>Are you sure?</Modal.Header>
      <Modal.Content>You&apos;re going to delete {'something'}.</Modal.Content>
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
          }}
          negative
        />
      </Modal.Actions>
    </Modal>
  );
}
