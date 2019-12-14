import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';

export default function Content({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

Content.propTypes = {
  children: PropTypes.element.isRequired,
};
