import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

import { MdKeyboardArrowLeft, MdCheck } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';
import api from '~/services/api';
import { priceFormatted } from '~/util/priceFormat';
import { durationMask, priceMask } from '~/util/mask';
import { planUpdateRequest } from '~/store/modules/plan/actions';

import Content from '~/components/Content';
import { Header, Edit, Info } from './styles';

export default function PlansEdit() {
  const dispatch = useDispatch();

  const loading = useSelector(state => state.plan.loading);

  const { plan_id } = useParams();

  const [initialPlan, setInitialPlan] = useState([]);

  const [duration, setDuration] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    async function loadPlan() {
      const response = await api.get(`plans/${plan_id}`);

      const data = {
        ...response.data,
        duration: String(response.data.duration),
        price: priceFormatted(response.data.price),
        totalPrice: priceFormatted(
          response.data.duration * response.data.price
        ),
      };

      setInitialPlan(data);
      setDuration(data.duration);
      setPrice(data.price);
    }

    loadPlan();
  }, [plan_id]);

  function handleSubmit({ title, duration, price }) {
    dispatch(planUpdateRequest(plan_id, title, duration, price));
  }

  return (
    <>
      <Form initialData={initialPlan} onSubmit={handleSubmit}>
        <Header>
          <h1>Edição de plano</h1>
          <aside>
            <Link to="/plans">
              <MdKeyboardArrowLeft color="#fff" size={20} />
              VOLTAR
            </Link>
            <button type="submit">
              <MdCheck color="#fff" size={20} />
              {loading ? 'CARREGANDO' : 'SALVAR'}
            </button>
          </aside>
        </Header>
        <Content>
          <Edit>
            {/* eslint jsx-a11y/label-has-associated-control: ["error", { assert: "either" } ] */}
            <label htmlFor="title">
              <span>TÍTULO DO PLANO</span>
              <Input placeholder="Diamond" name="title" id="title" />
            </label>
            <Info>
              <label htmlFor="duration">
                <span>DURAÇÃO (em meses)</span>
                <Input
                  name="duration"
                  onChange={e => setDuration(e.target.value)}
                  maxLength="2"
                  id="duration"
                  value={durationMask(duration)}
                />
              </label>
              <label htmlFor="price">
                <span>PREÇO MENSAL</span>
                <Input
                  name="price"
                  onChange={e => setPrice(e.target.value)}
                  id="price"
                  value={priceMask(price)}
                />
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
