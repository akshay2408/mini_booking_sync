import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('booking', { reload:true });
  },
  actions: {
    deleteBooking(booking) {
      let confirmation = confirm('Are you sure want to delete booking ?')
      if(confirmation) {
        booking.destroyRecord();
        this.controller.set('responseMessage', 'Booking Deleted');
      }
    },
    willTransition() {
      this.controller.set('responseMessage', false);
    }
  },
});
