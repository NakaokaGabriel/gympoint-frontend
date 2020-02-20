import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { MdKeyboardArrowLeft, MdCheck } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';
import { priceMask } from '~/util/mask';

import Content from '~/components/Content';

import { Header, Edit, Info } from './styles';

export default function PlansEdit() {
  const [duration, setDuration] = useState('');
  const [monthPrice, setMonthPrice] = useState('');
  const [totalPrice, setTotalPrice] = useState('');

  useEffect(() => {
    function calcTotalPrice() {
      const total = parseFloat(monthPrice);
      const numberDuration = Number(duration);

      const totalDuration = total * numberDuration;

      console.tron.log(total);
    }

    calcTotalPrice();
  }, [duration, monthPrice]);

  return (
    <>
      <Form>
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
            <label htmlFor="name">
              <span>TÍTULO DO PLANO</span>
              <Input placeholder="Diamond" name="title" id="title" />
            </label>
            <Info>
              <label htmlFor="duration">
                <span>DURAÇÃO (em meses)</span>
                <Input
                  onChange={event => setDuration(event.target.value)}
                  name="duration"
                  id="duration"
                />
              </label>
              <label htmlFor="currentPrice">
                <span>PREÇO MENSAL</span>
                <Input
                  onChange={event =>
                    setMonthPrice(priceMask(event.target.value))
                  }
                  value={monthPrice}
                  name="currentPrice"
                  id="currentPrice"
                />
              </label>
              <label htmlFor="totalPrice">
                <span>PREÇO TOTAL</span>
                <Input
                  onChange={event => setTotalPrice(event.target.value)}
                  value={totalPrice}
                  name="totalPrice"
                  id="totalPrice"
                />
              </label>
            </Info>
          </Edit>
        </Content>
      </Form>
    </>
  );
}
