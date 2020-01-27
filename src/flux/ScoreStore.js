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
    this.score.runs = runs;
    this.score.wickets = wickets;
    this.score.overs = overs;

    this.emit('change');
  }

  get score() {
    return this.score;
  }
}

const scoreStoreInstance = new ScoreStore();

export default scoreStoreInstance;
