import { Roles } from '../../api/roles/roles.js';

if (Roles.find().count()===0) {
  Roles.insert({ role: 'Harvester', points: 1 });
}
