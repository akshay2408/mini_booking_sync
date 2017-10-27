import { test } from 'qunit';
import moduleForAcceptance from 'frontend/tests/helpers/module-for-acceptance';
import Ember from 'ember';

moduleForAcceptance('Acceptance | delete booking');

test('Flow of to delete a booking', function(assert) {
  server.createList('booking', 10);
  visit('/bookings');
  click('.table tbody tr:first td a.delete');
  window.confirm=function(){
    return true;
  };
  andThen(function() {
    Ember.run(() => {
      const bookingDel = find('div.alert-success').text();
      assert.equal(bookingDel, `Booking Deleted`, 'Booking Deleted');
    });
  });
});
