import React from 'react';

import { Link } from 'react-router-dom';
import { MdKeyboardArrowLeft, MdCheck } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';

import Content from '~/components/Content';

import { Header, Edit, Info } from './styles';

export default function PlansEdit() {
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
                <Input name="duration" id="duration" />
              </label>
              <label htmlFor="currentPrice">
                <span>PREÇO MENSAL</span>
                <Input name="currentPrice" id="currentPrice" />
              </label>
              <label htmlFor="totalPrice">
                <span>PREÇO TOTAL</span>
                <Input name="totalPrice" id="totalPrice" />
              </label>
            </Info>
          </Edit>
        </Content>
      </Form>
    </>
  );
}
