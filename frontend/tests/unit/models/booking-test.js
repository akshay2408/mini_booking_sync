import { moduleForModel, test } from 'ember-qunit';
import Ember from 'ember';

moduleForModel('booking', 'Unit | Model | booking', {
  // Specify the other units that are required for this test.
  needs: ['model:rental']
});

test('Has relationship', function(assert) {
	const Booking = this.store().modelFor('booking');
	const relationship = Ember.get(Booking, 'relationshipsByName').get('rental');

	assert.equal(relationship.key, 'rental', 'Has relationship with rental');
	assert.equal(relationship.kind, 'belongsTo', 'Kind of relationship is belongsTo');
});
