import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import { MdKeyboardArrowLeft, MdCheck } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';
import api from '~/services/api';
import { priceFormatted } from '~/util/priceFormat';

import Content from '~/components/Content';
import { Header, Edit, Info } from './styles';

export default function PlansEdit() {
  const { plan_id } = useParams();

  const [initialPlan, setInitialPlan] = useState([]);

  useEffect(() => {
    async function loadPlan() {
      const response = await api.get(`plans/${plan_id}`);

      const data = {
        ...response.data,
        price: priceFormatted(response.data.price),
        totalPrice: priceFormatted(
          response.data.duration * response.data.price
        ),
      };

      setInitialPlan(data);
    }

    loadPlan();
  }, [plan_id]);

  return (
    <>
      <Form initialData={initialPlan}>
        <Header>
          <h1>Edição de plano</h1>
          <aside>
            <Link to="/plans">
              <MdKeyboardArrowLeft color="#fff" size={20} />
              VOLTAR
            </Link>
            <button type="submit">
              <MdCheck color="#fff" size={20} />
              SALVAR
            </button>
          </aside>
        </Header>
        <Content>
          <Edit>
            {/* eslint jsx-a11y/label-has-associated-control: ["error", { assert: "either" } ] */}
            <label htmlFor="name">
              <span>TÍTULO DO PLANO</span>
              <Input placeholder="Diamond" name="title" id="title" />
            </label>
            <Info>
              <label htmlFor="duration">
                <span>DURAÇÃO (em meses)</span>
                <Input name="duration" id="duration" />
              </label>
              <label htmlFor="price">
                <span>PREÇO MENSAL</span>
                <Input name="price" id="price" />
              </label>
              <label htmlFor="totalPrice">
                <span>PREÇO TOTAL</span>
                <Input name="totalPrice" readOnly id="totalPrice" />
              </label>
            </Info>
          </Edit>
        </Content>
      </Form>
    </>
  );
}
