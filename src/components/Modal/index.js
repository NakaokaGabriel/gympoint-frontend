import React, { useLayoutEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import { Background, Content } from './styles';

export default function Modal({ children, modal, closeModal }) {
  const box = useRef();

  useLayoutEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'hidden';
    };
  }, []);

  function handleWindowClick(event) {
    if (!box.current.contains(event.target)) {
      closeModal();
    }
  }

  return (
    <Background modal={modal} onClick={handleWindowClick}>
      <Content ref={box}>{children}</Content>
    </Background>
  );
}

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  modal: PropTypes.bool.isRequired,
  closeModal: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]).isRequired,
};
