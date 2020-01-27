import { EventEmitter } from 'events';

class ScoreStore extends EventEmitter {
  constructor() {
    super();
    this.score = {
      runs: 0,
      wickets: 0,
      overs: 0
    };
  }

  get score() {
    return this.score;
  }
}

const scoreStoreInstance = new ScoreStore();

export default scoreStoreInstance;
