import React from 'react';
import { Link } from 'react-router-dom';

import { MdAdd } from 'react-icons/md';

import { Header } from './styles';
import Content from '~/components/Content';
import Table from '~/components/Table';

export default function Enrollment() {
  return (
    <>
      <Header>
        <h1>Gerenciando matrículas</h1>
        <aside>
          <Link to="/plan/register">
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
          <tbody>
            {plans.map(plan => (
              <tr key={plan.id}>
                <td>{plan.title}</td>
                <td>{plan.duration} meses</td>
                <td>{plan.priceFormat}</td>
                <td>
                  <div>
                    <Link to={`plan/edit/${plan.id}`}>editar</Link>
                    <button type="button" onClick={() => handleDelete(plan.id)}>
                      excluir
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Content>
    </>
  );
}
