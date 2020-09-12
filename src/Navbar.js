import React, { useState, useEffect } from 'react';
import authStoreInstance from './flux/LoginStore';

const Navbar = () => {
  const [loginStatus, setLoginStatus] = useState(null);
  useEffect(() => {
    authStoreInstance.on('login', () => {
      setLoginStatus(authStoreInstance.getAuthStatus());
    });

    authStoreInstance.on('logout', () => {
      setLoginStatus(authStoreInstance.getAuthStatus());
    });
  }, []);

  return (
    <React.Fragment>
      <nav className='navbar navbar-dark bg-dark'>
        <a className='navbar-brand' href='#'>
          <img
            src='logo512.png'
            width='30'
            height='30'
            className='d-inline-block align-top mr-3'
            alt=''
          />
          Flux Architecture Demo
        </a>

        <h3 className='text-light'>
          {loginStatus ? loginStatus.displayName : 'Please login'}
        </h3>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
