import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';
import { MdKeyboardArrowLeft, MdCheck } from 'react-icons/md';

import { studentRegisterRequest } from '~/store/modules/student/actions';

import { Header, Edit, Info } from './styles';

import Content from '~/components/Content';

const schema = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatorio'),
  email: Yup.string()
    .email('E-mail invalido')
    .required('E-mail é obrigatorio'),
  age: Yup.string()
    .max(3, 'Idade deve ser no máximo 3 caracteres')
    .required('Idade é obrigatorio'),
  weight: Yup.string().required('Peso é obrigatorio'),
  height: Yup.string().required('Altura é obrigatorio'),
});

export default function StudentRegister() {
  const [updateAge, setUpdateAge] = useState('');
  const [updateWeight, setUpdateWeight] = useState('');
  const [updateHeight, setUpdateHeight] = useState('');

  const loading = useSelector(state => state.student.loading);
  const dispatch = useDispatch();

  function handleSubmit(data, { resetForm }) {
    dispatch(studentRegisterRequest(data));

    resetForm();

    setUpdateAge('');
    setUpdateWeight('');
    setUpdateHeight('');
  }

  return (
    <>
      <Form onSubmit={handleSubmit} schema={schema}>
        <Header>
          <h1>Cadastro de aluno</h1>
          <aside>
            <Link to="/students">
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
            <label>
              {/* eslint jsx-a11y/label-has-associated-control: ["error", { assert: "either" } ] */}
              <span>NOME COMPLETO</span>
              <Input placeholder="John Doe" name="name" />
            </label>
            <label>
              {/* eslint jsx-a11y/label-has-associated-control: ["error", { assert: "either" } ] */}
              <span>ENDEREÇO DE E-MAIL</span>
              <Input placeholder="exemplo@email.com" name="email" />
            </label>
            <Info>
              <label htmlFor="age">
                <span>IDADE</span>
                <Input
                  name="age"
                  id="age"
                  value={updateAge}
                  onChange={e => setUpdateAge(e.target.value)}
                />
              </label>
              <label htmlFor="weight">
                <span>PESO (em kg)</span>
                <Input
                  name="weight"
                  id="weight"
                  value={updateWeight}
                  onChange={e => setUpdateWeight(e.target.value)}
                />
              </label>
              <label htmlFor="height">
                <span>ALTURA</span>
                <Input
                  name="height"
                  id="height"
                  value={updateHeight}
                  onChange={e => setUpdateHeight(e.target.value)}
                />
              </label>
            </Info>
          </Edit>
        </Content>
      </Form>
    </>
  );
}
