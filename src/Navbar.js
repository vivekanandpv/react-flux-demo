import React from 'react';
import { updateScore } from './flux/Actions';
import scoreStoreInstance from './flux/ScoreStore';

const Navbar = () => {
  let runs = scoreStoreInstance.getScore().runs;
  let wickets = scoreStoreInstance.getScore().wickets;
  let overs = scoreStoreInstance.getScore().overs;

  const updateHandler = () => {
    runs++;
    wickets++;
    overs++;

    updateScore(runs, wickets, overs);
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
