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
