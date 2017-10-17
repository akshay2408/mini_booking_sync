import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('booking',params.id);
  },
  actions: {
    saveBooking(newBooking) {
      newBooking.save().then(() => {
        let controller = this.controllerFor('bookings/index');
        controller.set('responseMessage', `We've updated booking`);
        this.transitionTo('bookings');
        this.controller.set('errors',false);
      }).catch((failure) => {
        let errorsObj = [];
        for(var key in failure.errors[0]) {
          if(key == 'start_at'){
            errorsObj.push({'Start at': failure.errors[0][key]});
          }else{
            errorsObj.push({'End at': failure.errors[0][key]});
          }
        }
        this.controller.set('errors',errorsObj[0]);
      });
    },
    willTransition() {
      this.controller.get('model').rollbackAttributes();
      this.controller.set('errors',false);
    }
  }
});
