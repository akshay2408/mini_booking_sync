import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.createRecord('rental');
  },
  actions: {
    saveRental(newRental) {
      newRental.save().then(() => {
        let controller = this.controllerFor('index');
        controller.set('responseMessage', `We've just saved new rental`);
        this.transitionTo('index');
      })
    },

    willTransition() {
      this.controller.get('model').rollbackAttributes();
    }
  }
});
