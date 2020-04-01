/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useParams, Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import { MdCheck, MdKeyboardArrowLeft } from 'react-icons/md';

import api from '~/services/api';
import { ageMask, weightMask, heightMask } from '~/util/mask';

import { studentUpdateRequest } from '~/store/modules/student/actions';

import { Header, Edit, Info } from './styles';
import Content from '~/components/Content';

export default function StudentEdit() {
  const dispatch = useDispatch();

  const loading = useSelector(state => state.student.loading);

  const [student, setStudent] = useState({});
  const [updateAge, setUpdateAge] = useState('');
  const [updateWeight, setUpdateWeight] = useState('');
  const [updateHeight, setUpdateHeight] = useState('');

  const { id } = useParams();

  useEffect(() => {
    async function loadStudent() {
      const response = await api.get(`students/${id}`);

      const { name, email, age, weight, height } = response.data;

      setStudent({
        name,
        email,
        age,
        weight,
        height,
      });

      setUpdateAge(age);
      setUpdateWeight(weight);
      setUpdateHeight(height);
    }

    loadStudent();
  }, [id]);

  async function handleSubmit(data, { studentId = id }) {
    dispatch(studentUpdateRequest(data, studentId));
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
              {loading ? 'CARREGANDO' : 'SALVAR'}
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
                <Input
                  name="age"
                  onChange={e => setUpdateAge(ageMask(e.target.value))}
                  value={updateAge}
                  maxLength="3"
                  id="age"
                />
              </label>
              <label htmlFor="weight">
                <span>PESO (em kg)</span>
                <Input
                  name="weight"
                  onChange={e => setUpdateWeight(weightMask(e.target.value))}
                  value={updateWeight}
                  maxLength="6"
                  id="weight"
                />
              </label>
              <label htmlFor="height">
                <span>ALTURA</span>
                <Input
                  name="height"
                  id="height"
                  value={updateHeight}
                  onChange={e => setUpdateHeight(heightMask(e.target.value))}
                  maxLength="4"
                />
              </label>
            </Info>
          </Edit>
        </Content>
      </Form>
    </>
  );
}
