import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('rental',params.id);
  },
  actions: {
    saveRental(rental) {
      rental.save().then(() => {
        let controller = this.controllerFor('index');
        controller.set('responseMessage', `We've updated rental`);
        this.transitionTo('index');
      });
    }
  }

});
