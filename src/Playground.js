import React, { useState, useEffect } from 'react';
import scoreStoreInstance from './flux/ScoreStore';

const Playground = () => {
  const [score, setScore] = useState({});
  useEffect(() => {
    scoreStoreInstance.on('change', () => {
      setScore(scoreStoreInstance.getScore());
    });
  }, []);

  return (
    <React.Fragment>
      <h3>Learning Flux Architecture</h3>
      <hr></hr>
      <p>Runs: {score.runs}</p>
      <p>Wickets: {score.wickets}</p>
      <p>Overs: {score.overs}</p>
    </React.Fragment>
  );
};

export default Playground;
