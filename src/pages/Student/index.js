import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdAdd, MdSearch } from 'react-icons/md';

import api from '~/services/api';

import { Header, Form, Table } from './styles';

import Content from '~/components/Content';

export default function Student() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    async function loadStudents() {
      const response = await api.get(`students?name=${search}`);

      setStudents(response.data);
    }

    loadStudents();
  }, [search]);

  function handleKey(event) {
    setSearch(event.target.value);
  }

  async function handleDelete(id) {
    const confirm = window.confirm('Quer apagar ?');

    if (confirm) {
      await api.delete(`students/${id}`);

      const idStudent = students.filter(student => {
        return student.id !== id;
      });

      setStudents(idStudent);
    } else {
      console.tron.log('cu');
    }
  }

  return (
    <>
      <Header>
        <h1>Gerenciando alunos</h1>
        <aside>
          <Link to="/student/register">
            <MdAdd color="#fff" size={20} />
            CADASTRAR
          </Link>
          <Form>
            <MdSearch size={16} color="#EE4D64" />
            <input type="text" onKeyUp={handleKey} placeholder="Buscar aluno" />
          </Form>
        </aside>
      </Header>
      <Content>
        <Table>
          <thead>
            <tr>
              <th>NOME</th>
              <th>EMAIL</th>
              <th>IDADE</th>
              <th aria-label="buttons" />
            </tr>
          </thead>
          <tbody>
            {students.map(student => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>
                  <p>{student.age}</p>
                </td>
                <td>
                  <div>
                    <Link to={`student/profile/${student.id}`}>editar</Link>
                    <button
                      type="button"
                      onClick={() => handleDelete(student.id)}
                    >
                      apagar
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
