import { moduleFor, test } from 'ember-qunit';
import Ember from 'ember';

moduleFor('route:bookings/index', 'Unit | Route | bookings/index', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('it return a list of bookings', function(assert) {
  let store = {
    findAll: function() {
      return new Ember.RSVP.Promise(function(resolve) {
        resolve([
          {id:1, start_at: '12/15/2017', end_at: '12/18/2017', client_email: 'johndoe@example.com',price:'15000',rental_id:1},
          {id:2, start_at: '10/18/2017', end_at: '10/22/2017', client_email: 'example@example.com',price:'24000',rental_id:2}
        ]);
      });
    }
  };

  let route = this.subject();
  route.set('store', store);
  assert.deepEqual(route.model()._result, [
    {id:1, start_at: '12/15/2017', end_at: '12/18/2017', client_email: 'johndoe@example.com',price:'15000',rental_id:1},
    {id:2, start_at: '10/18/2017', end_at: '10/22/2017', client_email: 'example@example.com',price:'24000',rental_id:2}
  ]);
});