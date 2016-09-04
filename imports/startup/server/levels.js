import { Levels } from '../../api/levels/levels.js';

if (Levels.find().count()===0) {
  Levels.insert({ type: 'City Hall', level: 1, stone: 500, wood: 500, prob_reproduce: 0.0, prob_die: 0.0 });
}
