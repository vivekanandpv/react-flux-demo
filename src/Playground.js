import React, { useState, useEffect } from 'react';
import scoreStoreInstance from './flux/ScoreStore';

const Playground = () => {
  const [score, setScore] = useState({});

  const subscribeToScoreStore = () => {
    setScore(scoreStoreInstance.getScore());
  };
  useEffect(() => {
    //    Whenever a this component is rerendered (through routing),
    //  the lambda we passed to store is not removed. There is no way
    //  to remove a lambda from a publisher's invocation list.
    //  After a new render of the same component, there are now two listeners
    //  of which one has been destroyed. But when event is emitted, that first
    //  function reference is lost and hence, causes the error.
    //  therefore, make the event listener a named function and use clean up hook to remove it
    scoreStoreInstance.on('change', subscribeToScoreStore);

    return () => {
      console.log('unsubscribing from the store');
      scoreStoreInstance.removeListener('change', subscribeToScoreStore);
    };
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
