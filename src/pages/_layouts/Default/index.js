import React from 'react';
import PropTypes from 'prop-types';

import { Container, Content } from './styles';

export default function Default({ children }) {
  return (
    <Container>
      <Content>{children}</Content>
    </Container>
  );
}

Default.propTypes = {
  children: PropTypes.element.isRequired,
};
