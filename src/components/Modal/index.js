import React from 'react';
import PropTypes from 'prop-types';

import { Background, Content } from './styles';

export default function Modal({ children, modal }) {
  return (
    <Background modal={modal}>
      <Content>{children}</Content>
    </Background>
  );
}

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  modal: PropTypes.bool.isRequired,
};
