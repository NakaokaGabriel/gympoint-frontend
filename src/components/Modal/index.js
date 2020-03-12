import React from 'react';
import PropTypes from 'prop-types';

import { Background, Content } from './styles';

export default function Modal({ children }) {
  return (
    <Background>
      <Content>{children}</Content>
    </Background>
  );
}

Modal.propTypes = {
  children: PropTypes.element.isRequired,
};
