import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('rental', { reload:true });
  },
  actions: {
    deleteRental(rental) {
      let confirmation = confirm('Are you sure want to delete rental ?')
      if(confirmation) {
        rental.destroyRecord();
        this.controller.set('responseMessage', "Rental deleted.");

      }
    },
    willTransition() {
      this.controller.set('responseMessage', false);
    }
  },
});
