import React from 'react';
import { MdAdd, MdSearch } from 'react-icons/md';

import { Header, Form, Table } from './styles';

import Content from '~/components/Content';

export default function Student() {
  return (
    <>
      <Header>
        <h1>Gerenciando alunos</h1>
        <aside>
          <button type="button">
            <MdAdd color="#fff" size={20} />
            CADASTRAR
          </button>
          <Form>
            <MdSearch size={16} color="#EE4D64" />
            <input type="text" placeholder="Buscar aluno" />
          </Form>
        </aside>
      </Header>
      <Content>
        <Table>
          <thead>
            <tr>
              <th>NOME</th>
              <th>EMAIL</th>
              <th>IDADE</th>
              <th aria-label="buttons" />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cha Ji-Hun</td>
              <td>example@rocketseat.com.br</td>
              <td>
                <p>20</p>
              </td>
              <td>
                <div>
                  <button type="button">editar</button>
                  <button type="button">apagar</button>
                </div>
              </td>
            </tr>
            <tr>
              <td>Cha Ji-Hun</td>
              <td>example@rocketseat.com.br</td>
              <td>
                <p>20</p>
              </td>
              <td>
                <div>
                  <button type="button">editar</button>
                  <button type="button">apagar</button>
                </div>
              </td>
            </tr>
            <tr>
              <td>Cha Ji-Hun</td>
              <td>example@rocketseat.com.br</td>
              <td>
                <p>20</p>
              </td>
              <td>
                <div>
                  <button type="button">editar</button>
                  <button type="button">apagar</button>
                </div>
              </td>
            </tr>
            <tr>
              <td>Cha Ji-Hun</td>
              <td>example@rocketseat.com.br</td>
              <td>
                <p>20</p>
              </td>
              <td>
                <div>
                  <button type="button">editar</button>
                  <button type="button">apagar</button>
                </div>
              </td>
            </tr>
          </tbody>
        </Table>
      </Content>
    </>
  );
}
