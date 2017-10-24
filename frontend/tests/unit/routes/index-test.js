import { moduleFor, test } from 'ember-qunit';
import Ember from 'ember';

moduleFor('route:index', 'Unit | Route | index', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('it return a list of rentals', function(assert) {
  let store = {
    findAll: function() {
      return new Ember.RSVP.Promise(function(resolve) {
        resolve([
          {id:1, name: 'Hotel Country Inn', daily_rate: '5000.00'},
          {id:1, name: 'Hotel Orange', daily_rate: '6000.00'}
        ]);
      });
    }
  };

  let route = this.subject();
  route.set('store', store);
  assert.deepEqual(route.model()._result, [
    {id:1, name: 'Hotel Country Inn', daily_rate: '5000.00'},
    {id:1, name: 'Hotel Orange', daily_rate: '6000.00'}
  ]);
});
