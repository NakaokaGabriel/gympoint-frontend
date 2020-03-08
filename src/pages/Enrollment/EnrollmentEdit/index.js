import React from 'react';
import { useParams, Link } from 'react-router-dom';

import { Form, Input } from '@rocketseat/unform';
import { MdKeyboardArrowLeft, MdCheck } from 'react-icons/md';

import { Header, Edit, Info } from './styles';
import Content from '~/components/Content';

export default function EnrollmentEdit() {
  const { id } = useParams();

  return (
    <>
      <Form>
        <Header>
          <h1>Edição de aluno</h1>
          <aside>
            <Link to="/enrollments">
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
            <label htmlFor="aluno">
              {/* eslint jsx-a11y/label-has-associated-control: ["error", { assert: "either" } ] */}
              <span>ALUNO</span>
              <Input placeholder="Nome do aluno" name="aluno" id="aluno" />
            </label>
            <Info>
              <label htmlFor="plan">
                <span>PLANO</span>
                <Input name="plan" id="plan" />
              </label>
              <label htmlFor="startDate">
                <span>DATA DE INÍCIO</span>
                <Input name="startDate" id="startDate" />
              </label>
              <label htmlFor="endDate">
                <span>DATA DE TÉRMINO</span>
                <Input name="endDate" id="endDate" />
              </label>
              <label htmlFor="endPrice">
                <span>VALOR FINAL</span>
                <Input name="endPrice" id="endPrice" />
              </label>
            </Info>
          </Edit>
        </Content>
      </Form>
    </>
  );
}
