import React from 'react';
import scoreStoreInstance from './flux/ScoreStore';

const Navbar = () => {
  let runs = 0;
  let wickets = 0;
  let overs = 0;

  const updateScore = () => {
    runs++;
    wickets++;
    overs++;
    scoreStoreInstance.updateScore(runs, wickets, overs);
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

        <button className='btn btn-primary' onClick={updateScore}>
          Update
        </button>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
