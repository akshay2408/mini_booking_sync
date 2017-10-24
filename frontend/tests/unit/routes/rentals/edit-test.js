import { moduleFor, test } from 'ember-qunit';
import Ember from 'ember';

moduleFor('route:rentals/edit', 'Unit | Route | rentals/edit', {
  // Specify the other units that are required for this test.
  needs: ['model:rental']
});

test('should load rental by id', function(assert) {

  let route = this.subject({
    store: {
      findRecord(modelName) {
        assert.equal(modelName, 'rental');
        return new Ember.RSVP.Promise(function(resolve) {
          resolve([{id:1, name: 'Hotel Country Inn', daily_rate: '5000.00'}])
        })
      }
    }
  });
  assert.deepEqual(route.model(1)._result, [
    {id:1, name: 'Hotel Country Inn', daily_rate: '5000.00'},
  ]);
});
