import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  padding: 20px 30px;
`;

export const Navbar = styled.nav`
  display: flex;
  align-items: center;

  > h5 {
    color: #ee4d64;
    font-size: 16px;
    font-weight: bold;
    margin-left: 12px;

    &::after {
      content: '';
      display: inline-block;
      background: #dddddd;
      width: 1px;
      height: 32px;
      margin: 0 30px;
      vertical-align: middle;
    }
  }

  ul {
    display: flex;
    align-items: center;

    li a {
      margin: 0 10px;
      color: #999999;
      font-weight: bold;
    }
  }
`;

export const Profile = styled.div`
  text-align: right;

  > strong {
    color: #666666;
    text-align: right;
    display: block;
    margin-bottom: 4px;
  }

  > button {
    display: inline-block;
    border: none;
    background: transparent;
    color: #de3b3b;
  }
`;
