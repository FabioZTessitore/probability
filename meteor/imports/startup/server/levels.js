import { Levels } from '../../api/levels/levels.js';

if (Levels.find().count()===0) {
  Levels.insert({ buildingType: 'City Hall', buildingLevel: 1, stoneNeededToBuild: 100, woodNeededToBuild: 100, changeScaleProbReproduce: 1, changeScaleProbDie: -5 });
}
