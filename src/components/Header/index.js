import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Navbar, Profile } from './styles';

import logo from '~/assets/logo.svg';

export default function Header() {
  return (
    <Container>
      <Navbar>
        <img src={logo} alt="Gympoint" />
        <h5>GYMPOINT</h5>

        <ul>
          <li>
            <Link to="/student">ALUNOS</Link>
          </li>
          <li>
            <Link to="/student">PLANOS</Link>
          </li>
          <li>
            <Link to="/student">MATRÍCULAS</Link>
          </li>
          <li>
            <Link to="/student">PEDIDOS DE AUXÍLIO</Link>
          </li>
        </ul>
      </Navbar>
      <Profile>
        <strong>Gabriel Nakaoka</strong>
        <button type="button">sair do sistema</button>
      </Profile>
    </Container>
  );
}
