import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import { MdKeyboardArrowLeft, MdCheck } from 'react-icons/md';

import { Header, Edit, Info } from './styles';

import Content from '~/components/Content';

export default function StudentRegister() {
  return (
    <>
      <Form>
        <Header>
          <h1>Cadastro de aluno</h1>
          <aside>
            <Link to="/students">
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
              <span>NOME COMPLETO</span>
              <Input placeholder="John Doe" name="name" id="name" />
            </label>
            <label htmlFor="email">
              <span>ENDEREÇO DE E-MAIL</span>
              <Input placeholder="exemplo@email.com" name="email" id="email" />
            </label>
            <Info>
              <label htmlFor="age">
                <span>IDADE</span>
                <Input name="age" id="age" />
              </label>
              <label htmlFor="weight">
                <span>PESO (em kg)</span>
                <Input name="weight" id="weight" />
              </label>
              <label htmlFor="height">
                <span>ALTURA</span>
                <Input name="height" id="height" />
              </label>
            </Info>
          </Edit>
        </Content>
      </Form>
    </>
  );
}
