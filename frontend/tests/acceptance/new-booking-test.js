import { test } from 'qunit';
import moduleForAcceptance from 'frontend/tests/helpers/module-for-acceptance';
import Ember from 'ember';

moduleForAcceptance('Acceptance | new booking');

test('Flow to create a new booking', function (assert) {
  server.createList('rental', 3);
  visit('/');

  click('.table tbody tr:first td a.booking');
  andThen(function() {
    find('input.inputStartAt').datepicker('setDate', '12/10/2017');
    find('input.inputEndAt').datepicker('setDate', '12/14/2017');
  })
  fillIn('input.inputEmail','test@test.com');
  click('button.submitBtn');
  andThen(function() {
    Ember.run(() => {
      const bookingCreate = find('div .alert-success').text();
      assert.equal(bookingCreate, `We've just saved new booking`, 'Booking Created');
    });
    assert.equal(currentURL(), '/bookings', 'Redirect to bookings page'); // Pass
  });
});
