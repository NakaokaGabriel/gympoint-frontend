import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import { MdCheck, MdKeyboardArrowLeft } from 'react-icons/md';

import { Header, Edit, Info } from './styles';
import Content from '~/components/Content';

export default function StudentEdit() {
  return (
    <>
      <Form>
        <Header>
          <h1>Edição de aluno</h1>
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
              <Input
                placeholder="Diego fernandes"
                name="name"
                id="name"
                value="diego"
              />
            </label>
            <label htmlFor="email">
              <span>ENDEREÇO DE E-MAIL</span>
              <Input
                placeholder="teste@hotmail.com"
                name="email"
                id="email"
                value="teste@hotmail.com"
              />
            </label>
            <Info>
              <label htmlFor="age">
                <span>IDADE</span>
                <Input name="age" id="age" value="20" />
              </label>
              <label htmlFor="weight">
                <span>PESO (em kg)</span>
                <Input name="weight" id="weight" value="84.4kg" />
              </label>
              <label htmlFor="height">
                <span>ALTURA</span>
                <Input name="height" id="height" value="1.88m" />
              </label>
            </Info>
          </Edit>
        </Content>
      </Form>
    </>
  );
}
