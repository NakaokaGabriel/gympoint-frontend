import React, { useState, useEffect } from 'react';

import { Form, Textarea } from '@rocketseat/unform';
import api from '~/services/api';

import { Header, ModalContent } from './styles';
import Content from '~/components/Content';
import Table from '~/components/Table';

import Modal from '~/components/Modal';

export default function HelpOrders() {
  const [orders, setOrders] = useState([]);

  const [modal, setModal] = useState(false);
  const [studentOrder, setStudentOrder] = useState(Number());
  const [helpOrder, setHelpOrder] = useState({});

  useEffect(() => {
    async function loadOrders() {
      const response = await api.get(`help-orders`);

      setOrders(response.data);
    }

    loadOrders();
  }, []);

  function handleModalOpen(student) {
    setModal(true);
    setStudentOrder(student);
  }

  useEffect(() => {
    async function indexStudentOrder() {
      const response = await api.get(`students/${studentOrder}/help-orders`);

      setHelpOrder(response.data[2]);
    }

    indexStudentOrder();
  }, [studentOrder]);

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
                  <button
                    type="button"
                    onClick={() => handleModalOpen(order.student.id)}
                  >
                    responder
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Content>
      {modal && (
        <Modal modal={modal} closeModal={() => setModal(false)}>
          <ModalContent>
            <h2>PERGUNTA DO ALUNO</h2>
            <p>{helpOrder.question}</p>
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
      )}
    </>
  );
}
