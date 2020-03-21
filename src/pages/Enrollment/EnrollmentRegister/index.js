import React, { useState, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { MdKeyboardArrowLeft, MdCheck } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';
import Select from 'react-select';

import api from '~/services/api';
import { priceFormatted } from '~/util/priceFormat';
import { dateMask } from '~/util/mask';
import { enrollmentRegisterRequest } from '~/store/modules/enrollment/actions';

import { Header, Edit, Info } from './styles';
import Content from '~/components/Content';

export default function EnrollmentRegister() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.enrollment.loading);

  const [students, setStudents] = useState({});
  const [studentValue, setStudentValue] = useState({});
  const [plans, setPlans] = useState([]);
  const [planValue, setPlanValue] = useState({});
  const [startDate, setStartDate] = useState('');

  useEffect(() => {
    async function loadStudents() {
      const response = await api.get('/students?name');

      const studentsOptions = response.data.map(student => ({
        value: student.id,
        label: student.name,
      }));

      setStudents(studentsOptions);
    }

    loadStudents();
  }, []);

  useEffect(() => {
    async function loadPlans() {
      const response = await api.get('/plans');

      const plansOptions = response.data.map(plan => ({
        value: plan.id,
        label: `${plan.title} | meses: ${plan.duration}`,
        price: plan.price,
        duration: plan.duration,
      }));

      setPlans(plansOptions);
    }

    loadPlans();
  }, []);

  const finalPrice = useMemo(() => {
    const isMoney = parseFloat(planValue.price);
    const isMonth = Number(planValue.duration);

    return priceFormatted(isMoney * isMonth || '0');
  }, [planValue]);

  function handleSubmit({ startDate }) {
    dispatch(enrollmentRegisterRequest(studentValue, planValue, startDate));
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Header>
          <h1>Cadastro de matrícula</h1>
          <aside>
            <Link to="/enrollments">
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
              <span>ALUNO</span>
              <Select
                name="student"
                options={students}
                defaultValue={{ label: 'Escolha um aluno' }}
                value={students.value}
                onChange={e => setStudentValue(e.value)}
              />
            </label>
            <Info>
              <label htmlFor="plan">
                <span>PLANO</span>
                <Select
                  options={plans}
                  defaultValue={{ label: 'Escolha um plano' }}
                  onChange={e => setPlanValue(e.value)}
                  name="plans"
                  value={plans.value}
                />
              </label>
              <label htmlFor="startDate">
                <span>DATA DE INÍCIO</span>
                <Input
                  name="startDate"
                  onChange={e => setStartDate(dateMask(e.target.value))}
                  id="startDate"
                  maxLength="10"
                  value={startDate}
                />
              </label>
              <label htmlFor="endDate">
                <span>DATA DE TÉRMINO</span>
                <Input readOnly name="endDate" id="endDate" />
              </label>
              <label htmlFor="endPrice">
                <span>VALOR FINAL</span>
                <Input
                  readOnly
                  value={finalPrice}
                  name="endPrice"
                  id="endPrice"
                />
              </label>
            </Info>
          </Edit>
        </Content>
      </Form>
    </>
  );
}
