import { test } from 'qunit';
import moduleForAcceptance from 'frontend/tests/helpers/module-for-acceptance';
import Ember from 'ember';

moduleForAcceptance('Acceptance | new rental');

test('Flow of to create a new rental', function(assert) {
  server.createList('rental', 10);
	visit('/');
	click('#new-rental');

  andThen(function () {
    assert.equal(currentURL(), '/rentals/new', 'current url is correct');
  });
  fillIn('input.inputName','test');
  fillIn('input.inputrate','100');
  click('button.submit');
  andThen(function() {
    assert.equal(currentURL(), '/', 'back to home page'); // Pass
    Ember.run(() => {
      const rentalCreated = find('div.alert-success').text();
      assert.equal(rentalCreated, `We've just saved new rental`, 'New rental created');
    });
  });
});
