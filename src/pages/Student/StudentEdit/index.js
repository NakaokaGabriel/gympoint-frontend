import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import { MdCheck, MdKeyboardArrowLeft } from 'react-icons/md';

import { Header } from './styles';
import Content from '~/components/Content';

export default function StudentEdit() {
  return (
    <>
      <Header>
        <h1>Edição de aluno</h1>
        <aside>
          <Link to="/students">
            <MdKeyboardArrowLeft color="#fff" size={20} />
            VOLTAR
          </Link>
          <button type="button">
            <MdCheck color="#fff" size={20} />
            SALVAR
          </button>
        </aside>
      </Header>
      <Content>
        <Form>
          <Input placeholder="Diego fernandes" name="name" />
        </Form>
      </Content>
    </>
  );
}
