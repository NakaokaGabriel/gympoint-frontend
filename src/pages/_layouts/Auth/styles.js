import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  background: #ee4d64;
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 360px;
  margin: 0 auto;
  background: #ffffff;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  padding: 50px 30px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 30px;
  }

  span {
    display: block;
    margin: 8px 0;
    color: #444444;
    font-size: 14px;
    font-weight: bold;
    line-height: 16px;
  }

  input {
    width: 100%;
    padding: 13px 0 13px 15px;
    border: 1px solid #dddddd;
    border-radius: 4px;
    font-size: 16px;
  }

  button {
    background: #ee4d64;
    border: none;
    margin-top: 15px;
    flex: 1;
    padding: 13px 0;
    color: #fff;
    font-weight: bold;
    transition: background 0.3s;

    &:hover {
      background: ${darken(0.03, '#ee4d64')};
    }
  }
`;
