import { moduleForModel, test } from 'ember-qunit';
import Ember from 'ember';

moduleForModel('rental', 'Unit | Model | rental', {
  // Specify the other units that are required for this test.
  needs: ['model:booking']
});

test('Has relationship', function(assert) {
	const Rental = this.store().modelFor('rental');
	const relationship = Ember.get(Rental, 'relationshipsByName').get('bookings');

	assert.equal(relationship.key, 'bookings', 'Has relationship with booking');
	assert.equal(relationship.kind, 'hasMany', 'Kind of relationship is hasMany');
});
