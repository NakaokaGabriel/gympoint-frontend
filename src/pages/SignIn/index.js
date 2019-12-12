import React from 'react';

import logo from '~/assets/big-logo.svg';

export default function SignIn() {
  return (
    <>
      <img src={logo} alt="Gympoint" />
      <form>
        <label htmlFor="email">
          <span>SEU E-MAIL</span>
          <input type="email" id="email" placeholder="exemplo@email.com" />
        </label>
        <label htmlFor="password">
          <span>SUA SENHA</span>
          <input type="password" id="password" placeholder="*************" />
        </label>
        <button type="submit">Entrar no sistema</button>
      </form>
    </>
  );
}
