import React from 'react';
import { transmitLogout } from './auth_utils/Auth';
import { logout } from './flux/Actions';
import Login from './Login';

const Playground = () => {
  const doLogout = () => {
    transmitLogout().then((response) => {
      logout();
    });
  };

  return (
    <React.Fragment>
      <Login />

      <hr />
      <button className='btn btn-warning' onClick={doLogout}>
        Logout
      </button>
    </React.Fragment>
  );
};

export default Playground;
