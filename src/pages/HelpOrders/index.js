import React, { useState, useEffect } from 'react';

import { Form, Input } from '@rocketseat/unform';
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
      try {
        const response = await api.get(`help-orders`);

        setOrders(response.data);
      } catch (err) {
        console.tron.log(err);
      }
    }

    loadOrders();
  }, []);

  function handleModalOpen(student) {
    setModal(true);
    setStudentOrder(student);
  }

  useEffect(() => {
    async function indexStudentOrder() {
      try {
        const response = await api.get(
          `help-orders/${studentOrder === 0 ? null : studentOrder}`
        );

        setHelpOrder(response.data);
      } catch (err) {
        console.tron.log(err);
      }
    }

    indexStudentOrder();
  }, [helpOrder, studentOrder]);

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
                    onClick={() => handleModalOpen(order.id)}
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
              {/* eslint-disable jsx-a11y/label-has-associated-control */}
              <label htmlFor="answer">SUA RESPOSTA</label>
              <Input
                multiline
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
