//IMPORT
import { useEffect } from 'react';
//STYLES
import { StyledModal, StyledOverlay } from './Modal.styled';

const Modal = ({ toggleModal, modalPic, modalAltText }) => {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        toggleModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [toggleModal]);

  const handleBackdropClick = ({ target, currentTarget }) => {
    if (currentTarget === target) {
      toggleModal();
    }
  };

  return (
    <StyledOverlay onClick={handleBackdropClick}>
      <StyledModal>
        <img src={modalPic} alt={modalAltText} />
      </StyledModal>
    </StyledOverlay>
  );
};

export default Modal;
