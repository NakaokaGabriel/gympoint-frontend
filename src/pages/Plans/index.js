import React from 'react';
import { Link } from 'react-router-dom';

import { MdAdd } from 'react-icons/md';

import { Header } from './styles';

import Content from '~/components/Content';
import Table from '~/components/Table';

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
      <Content>
        <Table>
          <thead>
            <tr>
              <th>TÍTULO</th>
              <th>DURAÇÃO</th>
              <th>VALOR p/ MÊS</th>
              <th aria-label="buttons" />
            </tr>
          </thead>
        </Table>
      </Content>
    </>
  );
}
