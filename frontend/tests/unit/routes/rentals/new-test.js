import { moduleFor, test } from 'ember-qunit';
import Ember from 'ember';

moduleFor('route:rentals/new', 'Unit | Route | rentals/new', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('it should rollback changes on transition', function(assert) {
  let route = this.subject({
    controller: Ember.Object.create({
      model: Ember.Object.create({
        rollbackAttributes() {
          assert.ok(true, 'should call rollbackAttributes on a model')
        }
      })
    })
  });
  route.actions.willTransition.call(route);
});
