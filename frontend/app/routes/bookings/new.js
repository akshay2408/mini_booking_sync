import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('booking');
  },

  afterModel(model, transition) {
    const rental_id = transition.params['bookings.new'].rental_id;
    let rental = this.store.find('rental', rental_id);
    this.set('rental' ,rental);
  },
  setupController: function(controller, model){
    this.controller.set('model', model);
    this.controller.set('rental', this.get('rental'))
  },

  actions: {
    saveBooking(newBooking) {
      newBooking.save().then(() => {
        let controller = this.controllerFor('bookings/index');
        controller.set('responseMessage', `We've just saved new booking`);
        this.transitionTo('bookings');
        this.controller.set('errors',false);
      }).catch((failure) => {
        this.controller.set('errors',failure.errors[0]);
      });
    }
  }

});
