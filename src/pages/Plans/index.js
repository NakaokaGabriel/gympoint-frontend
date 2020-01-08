import React from 'react';
import { Link } from 'react-router-dom';

import { MdAdd } from 'react-icons/md';

import { Header } from './styles';

import Content from '~/components/Content';

export default function Plans() {
  return (
    <>
      <Header>
        <h1>Gerenciando planos</h1>
        <aside>
          <Link to="/student/register">
            <MdAdd color="#fff" size={20} />
            CADASTRAR
          </Link>
        </aside>
      </Header>
    </>
  );
}
