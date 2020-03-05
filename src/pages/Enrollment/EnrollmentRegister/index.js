import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';

import { MdKeyboardArrowLeft, MdCheck } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';
import Select from 'react-select';

import api from '~/services/api';
import { priceFormatted } from '~/util/priceFormat';

import { Header, Edit, Info } from './styles';
import Content from '~/components/Content';

export default function EnrollmentRegister() {
  const [plans, setPlans] = useState([]);
  const [planValue, setPlanValue] = useState({});

  const [students, setStudents] = useState([]);

  useEffect(() => {
    async function loadPlans() {
      const response = await api.get('/plans');

      const plansOptions = response.data.map(plan => ({
        value: plan.id,
        label: plan.title,
        price: plan.price,
        duration: plan.duration,
      }));

      setPlans(plansOptions);
    }

    loadPlans();
  }, []);

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

  const handleChange = e => {
    setPlanValue(e);
  };

  const finalPrice = useMemo(() => {
    const isMoney = parseFloat(planValue.price);
    const isMonth = Number(planValue.duration);

    return priceFormatted(isMoney * isMonth || '0');
  }, [planValue]);

  return (
    <>
      <Form>
        <Header>
          <h1>Cadastro de matrícula</h1>
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
            <label>
              {/* eslint jsx-a11y/label-has-associated-control: ["error", { assert: "either" } ] */}
              <span>ALUNO</span>
              <Select
                name="student"
                options={students}
                defaultValue={{ label: 'Escolha um aluno' }}
              />
            </label>
            <Info>
              <label htmlFor="plan">
                <span>PLANO</span>
                <Select
                  options={plans}
                  defaultValue={{ label: 'Escolha um plano' }}
                  onChange={handleChange}
                  name="plans"
                />
              </label>
              <label htmlFor="startDate">
                <span>DATA DE INÍCIO</span>
                <Input name="startDate" id="startDate" maxLength="10" />
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
