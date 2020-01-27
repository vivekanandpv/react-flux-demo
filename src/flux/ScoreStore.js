import { EventEmitter } from 'events';
import scoreDispatcher from './Dispatcher';

class ScoreStore extends EventEmitter {
  constructor() {
    super();
    this.score = {
      runs: 0,
      wickets: 0,
      overs: 0
    };
  }

  updateScore(runs, wickets, overs) {
    this.score = {
      runs,
      wickets,
      overs
    };

    this.emit('change');
  }

  getScore() {
    return this.score;
  }

  //  single point of contact
  scoreStoreActionHandler(action) {
    //    Usually, actions are objects that essentially command the store
    //  Usual structure: {type: CONSTS_ALL_CAPS, data: ...}
    if (action.type === 'UPDATE_SCORE') {
      //  We may wish to validate here
      this.updateScore(action.runs, action.wickets, action.overs);
    }
  }
}

const scoreStoreInstance = new ScoreStore();

scoreDispatcher.register(
  scoreStoreInstance.scoreStoreActionHandler.bind(scoreStoreInstance)
);

export default scoreStoreInstance;
