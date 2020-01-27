import scoreDispatcher from './Dispatcher';

export const updateScore = (runs, wickets, overs) => {
  scoreDispatcher.dispatch({
    type: 'UPDATE_SCORE',
    runs,
    wickets,
    overs
  });
};
