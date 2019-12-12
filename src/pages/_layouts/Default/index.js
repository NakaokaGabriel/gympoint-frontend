import React from 'react';
import PropTypes from 'prop-types';

// import { Container } from './styles';

export default function Default({ children }) {
  return <div />;
}

Default.propTypes = {
  children: PropTypes.element.isRequired,
};
