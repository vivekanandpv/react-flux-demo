import React from 'react';
import { transmitLogin, getPersistedAuth } from './auth_utils/Auth';
import { login } from './flux/Actions';

const Login = (props) => {
  const doLogin = () => {
    transmitLogin('Vivek1', 'password').then((result) => {
      login(result);
    });
  };

  return (
    <>
      <h3>Login</h3>
      <hr />
      <button className='btn btn-primary' onClick={doLogin}>
        Login
      </button>
    </>
  );
};

export default Login;
