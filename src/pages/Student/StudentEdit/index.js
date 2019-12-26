import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import api from '~/services/api';

// import { Container } from './styles';

export default function StudentEdit() {
  const { id } = useParams();

  useEffect(() => {
    async function loadStudent() {
      const response = await api.get(`student`);
    }

    loadStudent();
  }, []);

  return <h1>{id}</h1>;
}
