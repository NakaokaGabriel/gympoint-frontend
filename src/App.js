import React from 'react';
import { Router } from 'react-router-dom';

import Routes from './Routes';
import history from './api/history';

import GlobalStyle from './styles/global';

function App() {
  return (
    <Router history={history}>
      <Routes />
      <GlobalStyle />
    </Router>
  );
}

export default App;
