import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { MdAdd } from 'react-icons/md';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';

import api from '~/services/api';

import { Header, Status } from './styles';
import Content from '~/components/Content';
import Table from '~/components/Table';

export default function Enrollment() {
  const [enrollments, setEnrollments] = useState([]);

  useEffect(() => {
    async function loadEnrollment() {
      const response = await api.get('/enrollments');

      const data = response.data.map(enrollment => ({
        ...enrollment,
        startDate: format(
          parseISO(enrollment.start_date),
          "dd 'de' MMMM 'de' yyyy",
          {
            locale: pt,
          }
        ),
        endDate: format(
          parseISO(enrollment.end_date),
          "dd 'de' MMMM 'de' yyyy",
          {
            locale: pt,
          }
        ),
      }));

      setEnrollments(data);
    }

    loadEnrollment();
  }, []);

  async function handleDelete(id) {
    const deleteEnrollment = enrollments.filter(enrollment => {
      return enrollment.id !== id;
    });

    try {
      await api.delete(`enrollments/${id}`);
    } catch (err) {
      console.tron.log(err);
    }

    setEnrollments(deleteEnrollment);
  }

  return (
    <>
      <Header>
        <h1>Gerenciando matrículas</h1>
        <aside>
          <Link to="/enrollment/register">
            <MdAdd color="#fff" size={20} />
            CADASTRAR
          </Link>
        </aside>
      </Header>
      <Content>
        <Table>
          <thead>
            <tr>
              <th>ALUNO</th>
              <th>PLANO</th>
              <th>INÍCIO</th>
              <th>TÉRMINO</th>
              <th>ATIVA</th>
              <th aria-label="buttons" />
            </tr>
          </thead>
          <tbody>
            {enrollments.map(enrollment => (
              <tr key={enrollment.id}>
                <td>{enrollment.student.name}</td>
                <td>{enrollment.plan.title}</td>
                <td>{enrollment.startDate}</td>
                <td>{enrollment.endDate}</td>
                <td>
                  <Status status={enrollment.active} />
                </td>
                <td>
                  <div>
                    <Link to={`enrollment/edit/${enrollment.id}`}>editar</Link>
                    <button
                      type="button"
                      onClick={() => handleDelete(enrollment.id)}
                    >
                      excluir
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Content>
    </>
  );
}
