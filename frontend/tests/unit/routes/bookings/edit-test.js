import { moduleFor, test } from 'ember-qunit';
import Ember from 'ember';

moduleFor('route:bookings/edit', 'Unit | Route | bookings/edit', {
  // Specify the other units that are required for this test.
  needs: ['model:booking']
});

test('should load booking by id', function(assert) {

  let route = this.subject({
    store: {
      findRecord(modelName) {
        assert.equal(modelName, 'booking');
        return new Ember.RSVP.Promise(function(resolve) {
          resolve([{id:1, start_at: '12/15/2017', end_at: '12/18/2017', client_email: 'johndoe@example.com',price:'15000',rental_id:1}])
        })
      }
    }
  });
  assert.deepEqual(route.model(1)._result, [
    {id:1, start_at: '12/15/2017', end_at: '12/18/2017', client_email: 'johndoe@example.com',price:'15000',rental_id:1}
  ]);
});
