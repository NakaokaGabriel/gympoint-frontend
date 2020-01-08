import styled from 'styled-components';

export const MainTable = styled.table`
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
