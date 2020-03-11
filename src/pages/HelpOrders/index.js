import React from 'react';

import { Header } from './styles';
import Content from '~/components/Content';
import Table from '~/components/Table';

export default function HelpOrders() {
  return (
    <>
      <Header>
        <h1>Pedidos de auxílio</h1>
      </Header>
      <Content>
        <Table>
          <thead>
            <tr>
              <th>ALUNO</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Lennert Nijenbijvank</td>
              <td>
                <button type="button">responder</button>
              </td>
            </tr>
          </tbody>
        </Table>
      </Content>
    </>
  );
}
