import scoreDispatcher from './Dispatcher';
import axios from 'axios';

export const updateScore = (runs, wickets, overs) => {
  scoreDispatcher.dispatch({
    type: 'UPDATE_SCORE',
    runs,
    wickets,
    overs
  });
};

export const getScoreFromEndpoint = url => {
  //  dispatch the START_FETCH action
  scoreDispatcher.dispatch({
    type: 'START_FETCH'
  });

  axios
    .get(url)
    .then(data => {
      //  successful. dispatch the FETCH_SCORE_SUCCESS action
      scoreDispatcher.dispatch({
        type: 'FETCH_SCORE_SUCCESS',
        runs: data.runs,
        wickets: data.wickets,
        overs: data.overs
      });
    })
    .catch(error => {
      console.log('Error', error);
      //  failed. dispatch the FETCH_FAILURE action
      scoreDispatcher.dispatch({
        type: 'FETCH_FAILURE'
      });
    })
    .finally(() => {
      //    fetch cycle completed
      //  may dispatch action if deem prudent
    });
};
