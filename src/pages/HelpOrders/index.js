import React, { useState, useEffect } from 'react';

import { Form, Textarea } from '@rocketseat/unform';
import api from '~/services/api';

import { Header, ModalContent } from './styles';
import Content from '~/components/Content';
import Table from '~/components/Table';

import Modal from '~/components/Modal';

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
                <td className="ask-question">
                  <button type="button">responder</button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Content>
      <Modal>
        <ModalContent>
          <h2>PERGUNTA DO ALUNO</h2>
          <p>
            Olá pessoal da academia, gostaria de saber se quando acordar devo
            ingerir batata doce e frango logo de primeira, preparar as marmitas
            e lotar a geladeira? Dou um pico de insulina e jogo o hipercalórico?
          </p>
          <Form>
            <label htmlFor="answer">SUA RESPOSTA</label>
            <Textarea
              id="answer"
              name="answer"
              placeholder="exemplo@email.com"
            />
            <button type="submit">Responder aluno</button>
          </Form>
        </ModalContent>
      </Modal>
    </>
  );
}
