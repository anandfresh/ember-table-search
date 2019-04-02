import Route from '@ember/routing/route';
import { get, set } from '@ember/object';
import { A as emberArray } from '@ember/array';

export default Route.extend({
  model() {
    return emberArray([
      { firstName: 'Chris', lastName: 'Gayle', country: 'West Indies' },
      { firstName: 'David', lastName: 'Warner', country: 'Australlia' },
      { firstName: 'Jos', lastName: 'Butler', country: 'England' },
      { firstName: 'Dale', lastName: 'Steyn', country: 'South Africa' },
      { firstName: 'Ross', lastName: 'Taylor', country: 'New Zealand' }
    ]);
  },

  setupController(controller) {
    this._super(...arguments);

    set(controller, 'selectedProperties', emberArray([...get(controller, 'availableProperties')]));
  }
});
