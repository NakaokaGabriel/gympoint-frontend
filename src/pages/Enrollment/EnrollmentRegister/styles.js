import styled from 'styled-components';
import { darken } from 'polished';

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0 20px;

  h1 {
    font-size: 24px;
  }

  aside {
    display: flex;
    align-items: center;

    a {
      border: none;
      background: #ccc;
      padding: 8px 15px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 15px;
      border-radius: 4px;
      color: #fff;
      font-weight: bold;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.2, '#ccc')};
      }

      svg {
        margin-right: 8px;
      }
    }

    button {
      border: none;
      background: #ee4d64;
      padding: 8px 15px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 4px;
      color: #fff;
      font-weight: bold;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.2, '#ee4d64')};
      }

      svg {
        margin-right: 8px;
      }
    }
  }
`;

export const Edit = styled.div`
  width: 100%;

  > label {
    display: block;
    width: 100%;
    margin: 10px 0;
  }

  span {
    display: block;
    color: #444;
    font-weight: bold;
    font-size: 14px;
    margin-bottom: 8px;
  }

  input {
    margin-bottom: 8px;
    width: 100%;
    padding: 13px 10px 13px 15px;
    color: #666;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
`;

export const Info = styled.div`
  display: flex;

  > label {
    flex: 1;

    & + label {
      margin-left: 15px;
    }
  }
`;
