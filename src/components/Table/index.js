import React from 'react';
import PropTypes from 'prop-types';

import { MainTable } from './styles';

export default function Table({ children }) {
  return (
    <>
      <MainTable>{children}</MainTable>
    </>
  );
}

Table.propTypes = {
  children: PropTypes.element.isRequired,
};
