import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

import { Form, Input } from '@rocketseat/unform';
import Select from 'react-select';
import { MdKeyboardArrowLeft, MdCheck } from 'react-icons/md';
import { parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '~/services/api';
import { priceFormatted } from '~/util/priceFormat';
import { dateMask } from '~/util/mask';
import { enrollmentUpdateRequest } from '~/store/modules/enrollment/actions';

import { Header, Edit, Info } from './styles';
import Content from '~/components/Content';

export default function EnrollmentEdit() {
  const dispatch = useDispatch();

  const [initialEnrollment, setInitialEnrollment] = useState({});
  const [startDate, setStartDate] = useState('');
  const [plans, setPlans] = useState([]);
  const [selectPlan, setSelectPlan] = useState();

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
      setStartDate(data.startDate);
    }

    loadGetEnrollment();
  }, [id]);

  useEffect(() => {
    async function loadPlans() {
      const response = await api.get('plans');

      const options = response.data.map(plan => ({
        ...plan,
        value: plan.id,
        label: plan.title,
      }));

      setPlans(options);
    }

    loadPlans();
  }, []);

  function handleSubmit({ start_date }) {
    dispatch(enrollmentUpdateRequest(id, selectPlan, start_date));
  }

  return (
    <>
      <Form onSubmit={handleSubmit} initialData={initialEnrollment}>
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
              <Input
                readOnly
                placeholder="Nome do aluno"
                name="student"
                id="student"
              />
            </label>
            <Info>
              <label htmlFor="plan">
                <span>PLANO</span>
                <Select
                  id="plan"
                  options={plans}
                  onChange={e => setSelectPlan(e.value)}
                />
              </label>
              <label htmlFor="start_date">
                <span>DATA DE INÍCIO</span>
                <Input
                  name="start_date"
                  onChange={e => setStartDate(dateMask(e.target.value))}
                  id="start_date"
                  value={startDate}
                  maxLength="10"
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
