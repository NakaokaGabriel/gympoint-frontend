import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0 20px;

  h1 {
    font-size: 24px;
  }
`;

export const ModalContent = styled.div`
  padding: 30px;

  h2 {
    font-size: 14px;
    color: #444;
  }

  p {
    font-size: 16px;
    margin: 10px 0;
    line-height: 26px;
    color: #666;
  }

  form {
    label {
      display: block;
      font-weight: bold;
      color: #444;
      margin: 20px 0 10px;
    }

    textarea {
      resize: none;
      width: 100%;
      border: 1px solid #ddd;
      border-radius: 6px;
      height: 120px;
      padding: 10px 10px;
      font-size: 16px;
      color: #999;

      &::placeholder {
        color: #999;
      }
    }

    button {
      margin-top: 20px;
      background: #ee4d64;
      color: #fff;
      padding: 14px;
      width: 100%;
      border: none;
      border-radius: 6px;
      font-size: 16px;
      font-weight: bold;
    }
  }
`;
