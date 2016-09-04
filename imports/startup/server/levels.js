import { Levels } from '../../api/levels/levels.js';

if (Levels.find().count()===0) {
  Levels.insert({ type: 'Mun', level: 1, stone: 50, wood: 50, prob_reproduce: 0.0, prob_die: 0.0 });
}
