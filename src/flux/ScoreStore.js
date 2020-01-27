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
}

const scoreStoreInstance = new ScoreStore();

export default scoreStoreInstance;
