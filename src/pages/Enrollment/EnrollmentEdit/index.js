import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import { Form, Input } from '@rocketseat/unform';
import { MdKeyboardArrowLeft, MdCheck } from 'react-icons/md';
import { parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import api from '~/services/api';
import { priceFormatted } from '~/util/priceFormat';
import { dateMask } from '~/util/mask';

import { Header, Edit, Info } from './styles';
import Content from '~/components/Content';

export default function EnrollmentEdit() {
  const [initialEnrollment, setInitialEnrollment] = useState([]);

  const [startDate, setStartDate] = useState('');

  const { id } = useParams();

  useEffect(() => {
    async function loadGetEnrollment() {
      const response = await api.get(`enrollments/${id}`);

      const data = {
        student: response.data.student.name,
        plan: response.data.plan.title,
        totalPrice: priceFormatted(response.data.price),
        startDate: format(
          parseISO(response.data.start_date),
          "dd'/'MM'/'yyyy",
          {
            locale: pt,
          }
        ),
        endDate: format(parseISO(response.data.end_date), "dd'/'MM'/'yyyy", {
          locale: pt,
        }),
      };

      setInitialEnrollment(data);
    }

    loadGetEnrollment();
  }, [id]);

  return (
    <>
      <Form initialData={initialEnrollment}>
        <Header>
          <h1>Edição de matricula</h1>
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
              <Input placeholder="Nome do aluno" name="student" id="student" />
            </label>
            <Info>
              <label htmlFor="plan">
                <span>PLANO</span>
                <Input name="plan" id="plan" />
              </label>
              <label htmlFor="startDate">
                <span>DATA DE INÍCIO</span>
                <Input
                  name="startDate"
                  onChange={e => setStartDate(e.target.value)}
                  id="startDate"
                />
              </label>
              <label htmlFor="endDate">
                <span>DATA DE TÉRMINO</span>
                <Input readOnly name="endDate" id="endDate" />
              </label>
              <label htmlFor="totalPrice">
                <span>VALOR FINAL</span>
                <Input readOnly name="totalPrice" id="totalPrice" />
              </label>
            </Info>
          </Edit>
        </Content>
      </Form>
    </>
  );
}
