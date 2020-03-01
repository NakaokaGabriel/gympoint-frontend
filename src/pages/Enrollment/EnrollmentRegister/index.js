import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { MdKeyboardArrowLeft, MdCheck } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';
import Select from 'react-select';
import api from '~/services/api';
import { dateMask } from '~/util/mask';

import { Header, Edit, Info } from './styles';
import Content from '~/components/Content';

export default function EnrollmentRegister() {
  const [plans, setPlans] = useState([]);
  const [startDate, setStartDate] = useState('');

  useEffect(() => {
    async function loadPlans() {
      const response = await api.get('/plans');

      const options = response.data.map(plan => ({
        value: plan.title,
        label: plan.title,
      }));

      setPlans(options);
    }

    loadPlans();
  }, []);

  return (
    <>
      <Form>
        <Header>
          <h1>Cadastro de matrícula</h1>
          <aside>
            <Link to="/plans">
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
              <Input name="student" />
            </label>
            <Info>
              <label htmlFor="duration">
                <span>PLANO</span>
                <Select options={plans} />
              </label>
              <label htmlFor="startDate">
                <span>DATA DE INÍCIO</span>
                <Input
                  name="startDate"
                  id="startDate"
                  onChange={e => setStartDate(e.target.value)}
                  value={dateMask(startDate)}
                  maxLength="10"
                />
              </label>
              <label htmlFor="endDate">
                <span>DATA DE TÉRMINO</span>
                <Input readOnly name="endDate" id="endDate" />
              </label>
              <label htmlFor="endPrice">
                <span>VALOR FINAL</span>
                <Input readOnly name="endPrice" id="endPrice" />
              </label>
            </Info>
          </Edit>
        </Content>
      </Form>
    </>
  );
}
