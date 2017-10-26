import { test } from 'qunit';
import moduleForAcceptance from 'frontend/tests/helpers/module-for-acceptance';
import Ember from 'ember';

moduleForAcceptance('Acceptance | delete rental');

test('Flow of to delete a rental', function(assert) {
  server.createList('rental', 10);
  visit('/');
  click('.table tbody tr:first td a.delete');
  window.confirm=function(){
    return true;
  };
  andThen(function() {
    assert.equal(currentURL(), '/', 'back to home page'); // Pass
    Ember.run(() => {
      const rentalUpdated = find('div.alert-success').text();
      assert.equal(rentalUpdated, `Rental deleted.`, 'Rental deleted');
    });
  });
});
