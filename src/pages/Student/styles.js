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
      background: #ee4d64;
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
        background: ${darken(0.2, '#ee4d64')};
      }

      svg {
        margin-right: 8px;
      }
    }
  }
`;

export const Form = styled.div`
  position: relative;

  > svg {
    position: absolute;
    top: 50%;
    left: 15px;
    transform: translate3d(0, -50%, 0);
  }

  input {
    width: 235px;
    padding: 10px 0;
    border-radius: 4px;
    background: #fff;
    border: 1px solid #dddddd;
    padding-left: 40px;
    padding-right: 5px;
  }
`;

export const Table = styled.table`
  width: 100%;

  thead tr {
    text-align: left;

    th {
      padding-bottom: 20px;
      font-size: 16px;
    }
  }

  tbody tr {
    &:first-child td {
      border-top: none;
      padding-top: 0;
    }

    td {
      border-top: 1px solid #eee;
      padding: 10px 0;

      > p {
        margin-left: 15px;
      }

      > div {
        text-align: right;

        button,
        a {
          border: none;
          background: transparent;
          color: #4d85ee;

          & + button {
            margin-left: 20px;
            font-size: 15px;
            color: #de3b3b;
          }
        }
      }
    }
  }
`;
