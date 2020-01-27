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
    console.log('Store Action Handler called', action);
  }
}

const scoreStoreInstance = new ScoreStore();

scoreDispatcher.register(
  scoreStoreInstance.scoreStoreActionHandler.bind(scoreStoreInstance)
);

export default scoreStoreInstance;
