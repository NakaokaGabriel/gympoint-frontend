import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/big-logo.svg';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('E-mail invalido')
    .required('E-mail é necessario'),
  password: Yup.string().required('É necessario preencher a senha'),
});

export default function SignIn() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <img src={logo} alt="Gympoint" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <label htmlFor="email">
          <span className="label">SEU E-MAIL</span>
          <Input
            name="email"
            type="email"
            id="email"
            placeholder="exemplo@email.com"
          />
        </label>
        <label htmlFor="password">
          <span className="label">SUA SENHA</span>
          <Input
            name="password"
            type="password"
            id="password"
            placeholder="*************"
          />
        </label>
        <button type="submit">Entrar no sistema</button>
      </Form>
    </>
  );
}
