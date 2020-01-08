import React from 'react';

// import { Container } from './styles';

import Header from '~/components/Header';

export default function Plans() {
  return (
    <>
      <Header>
        <h1>Gerenciando alunos</h1>
        <aside>
          <Link to="/student/register">
            <MdAdd color="#fff" size={20} />
            CADASTRAR
          </Link>
          <Form>
            <MdSearch size={16} color="#EE4D64" />
            <input type="text" onKeyUp={handleKey} placeholder="Buscar aluno" />
          </Form>
        </aside>
      </Header>
    </>
  );
}
