import React from 'react';
import { getScoreFromEndpoint } from './flux/Actions';
import scoreStoreInstance from './flux/ScoreStore';

const Navbar = () => {
  const updateHandler = () => {
    getScoreFromEndpoint('http://localhost:3000/api/score');
  };

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

        <button className='btn btn-primary' onClick={updateHandler}>
          Update Score
        </button>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
