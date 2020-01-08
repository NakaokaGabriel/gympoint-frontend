import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Container, Navbar, Profile } from './styles';

import logo from '~/assets/logo.svg';

import { signOut } from '~/store/modules/auth/actions';

export default function Header() {
  const profile = useSelector(state => state.user.profile);

  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Navbar>
        <img src={logo} alt="Gympoint" />
        <h5>GYMPOINT</h5>

        <ul>
          <li>
            <Link to="/students">ALUNOS</Link>
          </li>
          <li>
            <Link to="/plans">PLANOS</Link>
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
        <strong>{profile.name}</strong>
        <button type="button" onClick={handleLogout}>
          sair do sistema
        </button>
      </Profile>
    </Container>
  );
}
