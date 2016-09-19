import { Levels } from '../../api/levels/levels.js';

if (Levels.find().count()===0) {
  Levels.insert({ type: 'City Hall', level: 1, stone: 500, wood: 500, changeProbReproduce: 0, changeProbDie: 0 });
}
