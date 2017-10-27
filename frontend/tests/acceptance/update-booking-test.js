import { test } from 'qunit';
import moduleForAcceptance from 'frontend/tests/helpers/module-for-acceptance';
import Ember from 'ember';

moduleForAcceptance('Acceptance | update booking');

test('flow of to update booking', function(assert) {
  server.createList('booking', 2);
  visit('/bookings');
  click('.table tbody tr:last td a.update');
  andThen(function() {
      find('input.inputStartAt').datepicker('setDate', '12/10/2018');
      find('input.inputEndAt').datepicker('setDate', '12/14/2018');
    })
    fillIn('input.inputEmail','john@test.com');
    click('button.submitBtn');
  andThen(function() {
    assert.equal(currentURL(), '/bookings', 'back to bookings page'); // Pass
    Ember.run(() => {
      const bookingUpdate = find('div.alert-success').text();
      assert.equal(bookingUpdate, `We've updated booking`, 'Booking updated');
    });
  });
});
