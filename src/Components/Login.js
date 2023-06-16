import React from 'react';
import styled from 'styled-components';
import Logo from '../../olx-logo.png';

const LoginParentDiv = styled.div`
  border: 1px solid black;
  width: max-content;
  padding: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 6px;
`;

const Input = styled.input`
  border-top-color: transparent;
  border-left-color: transparent;
  border-right-color: transparent;
  outline-color: transparent;
`;

const Button = styled.button`
  width: 100%;
  height: 48px;
  background-color: #002f34;
  color: whitesmoke;
  font-weight: 900;

  &:hover {
    background-color: white;
    color: #002f34;
    border: 2px solid #002f34;
  }
`;

const SignupLink = styled.a`
  display: flex;
  justify-content: center;
  cursor: pointer;
`;

const Login = () => {
  return (
    <div>
      <LoginParentDiv>
        <img width="200px" height="200px" src={Logo} alt="Logo" />
        <form>
          <label htmlFor="fname">Email</label>
          <br />
          <Input
            className="input"
            type="email"
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <Input
            className="input"
            type="password"
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <Button>Login</Button>
        </form>
        <SignupLink>Signup</SignupLink>
      </LoginParentDiv>
    </div>
  );
};

export default Login;
