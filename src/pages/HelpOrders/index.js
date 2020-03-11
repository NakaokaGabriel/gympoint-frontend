import React, { useState, useEffect } from 'react';

import api from '~/services/api';

import { Header } from './styles';
import Content from '~/components/Content';
import Table from '~/components/Table';

export default function HelpOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function loadOrders() {
      const response = await api.get(`help-orders`);

      setOrders(response.data);
    }

    loadOrders();
  }, []);

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
            {orders.map(order => (
              <tr key={order.id}>
                <td>{order.student.name}</td>
                <td>
                  <button type="button">responder</button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Content>
    </>
  );
}
