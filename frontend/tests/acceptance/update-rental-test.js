import { test } from 'qunit';
import moduleForAcceptance from 'frontend/tests/helpers/module-for-acceptance';
import Ember from 'ember';

moduleForAcceptance('Acceptance | update rental');

test('Flow of to update rental', function(assert) {
  server.createList('rental', 10);
  visit('/');
  click('.table tbody tr:first td a.update');
  fillIn('input.inputName','updated test');
  fillIn('input.inputrate','1000');
  click('button.submit');
  andThen(function() {
    assert.equal(currentURL(), '/', 'back to home page'); // Pass
    Ember.run(() => {
      const rentalUpdated = find('div.alert-success').text();
      assert.equal(rentalUpdated, `We've updated rental`, 'Rental updated');
    });
  });
});
