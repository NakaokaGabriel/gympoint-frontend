import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import { Form, Input } from '@rocketseat/unform';
import { MdCheck, MdKeyboardArrowLeft } from 'react-icons/md';

import api from '~/services/api';

import { Header, Edit, Info } from './styles';
import Content from '~/components/Content';

export default function StudentEdit() {
  const [student, setStudent] = useState({});

  const { id } = useParams();

  useEffect(() => {
    async function loadStudent() {
      const response = await api.get(`students/${id}`);

      const { name, email, age, weight, height } = response.data;

      setStudent({
        name,
        email,
        age,
        weight: `${weight}kg`,
        height,
      });
    }

    loadStudent();
  }, [id]);

  async function handleSubmit(data) {
    console.log(data);
  }

  return (
    <>
      <Form onSubmit={handleSubmit} initialData={student}>
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
              <Input placeholder="Diego fernandes" name="name" id="name" />
            </label>
            <label htmlFor="email">
              <span>ENDEREÇO DE E-MAIL</span>
              <Input placeholder="teste@hotmail.com" name="email" id="email" />
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
