import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';
import { MdKeyboardArrowLeft, MdCheck } from 'react-icons/md';

import { planRegisterRequest } from '~/store/modules/plan/actions';

import { Header, Edit, Info } from './styles';

import Content from '~/components/Content';

const schema = Yup.object().shape({
  title: Yup.string().required('Esse campo é obrigatorio'),
  duration: Yup.string().required('Esse campo é obrigatorio'),
  monthPrice: Yup.string().required('Esse campo é obrigatorio'),
});

export default function PlansRegister() {
  const dispatch = useDispatch();

  function handleSubmit({ title, duration, monthPrice }, { resetForm }) {
    dispatch(planRegisterRequest(title, duration, monthPrice));

    resetForm();
  }

  return (
    <>
      <Form onSubmit={handleSubmit} schema={schema}>
        <Header>
          <h1>Cadastro de plano</h1>
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
            <label>
              {/* eslint jsx-a11y/label-has-associated-control: ["error", { assert: "either" } ] */}
              <span>TÍTULO DO PLANO</span>
              <Input name="title" />
            </label>
            <Info>
              <label htmlFor="duration">
                <span>DURAÇÃO (em meses)</span>
                <Input name="duration" id="duration" />
              </label>
              <label htmlFor="monthPrice">
                <span>PREÇO MENSAL</span>
                <Input name="monthPrice" id="monthPrice" />
              </label>
              <label htmlFor="totalPrice">
                <span>PREÇO TOTAL</span>
                <Input readOnly name="totalPrice" id="totalPrice" />
              </label>
            </Info>
          </Edit>
        </Content>
      </Form>
    </>
  );
}
