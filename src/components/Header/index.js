import React, { useState, useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

import { Container, Navbar, Profile } from './styles';

import logo from '~/assets/logo.svg';

import { signOut } from '~/store/modules/auth/actions';

export default function Header() {
  const location = useLocation();

  const profile = useSelector(state => state.user.profile);

  const dispatch = useDispatch();

  const [urlActive, setUrlActive] = useState('');

  function handleLogout() {
    dispatch(signOut());
  }

  useLayoutEffect(() => {
    function modifieldUrl() {
      const pathUrl = location.pathname.split('/');
      const [, url] = pathUrl;

      setUrlActive(url);
    }

    modifieldUrl();
  }, [location, urlActive]);

  return (
    <Container>
      <Navbar>
        <img src={logo} alt="Gympoint" />
        <h5>GYMPOINT</h5>

        <ul>
          <li>
            <Link
              className={
                urlActive ===
                  (urlActive === 'students' ? 'students' : 'student')
                  ? 'active'
                  : ''
              }
              to="/students"
            >
              ALUNOS
            </Link>
          </li>
          <li>
            <Link
              className={
                urlActive === (urlActive === 'plans' ? 'plans' : 'plan')
                  ? 'active'
                  : ''
              }
              to="/plans"
            >
              PLANOS
            </Link>
          </li>
          <li>
            <Link
              className={
                urlActive ===
                  (urlActive === 'enrollments' ? 'enrollments' : 'enrollment')
                  ? 'active'
                  : ''
              }
              to="/enrollments"
            >
              MATRÍCULAS
            </Link>
          </li>
          <li>
            <Link
              className={urlActive === 'help-orders' ? 'active' : ''}
              to="/help-orders"
            >
              PEDIDOS DE AUXÍLIO
            </Link>
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
