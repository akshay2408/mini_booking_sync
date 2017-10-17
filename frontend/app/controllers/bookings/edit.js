import Ember from 'ember';

export default Ember.Controller.extend({
  start_at:Ember.computed.alias('model.start_at'),
  end_at:Ember.computed.alias('model.end_at'),
  bookingDateChange: function() {
    if(this.get('start_at') && this.get('end_at')) {
      let date1 = new Date(this.get('start_at'));
      let date2 = new Date(this.get('end_at'));
      let timeDiff = Math.abs(date2.getTime() - date1.getTime());
      let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
      this.set('model.price', (diffDays * this.get('model.rental.daily_rate')).toFixed(1)); 
    }
  }.observes('start_at', 'end_at'),
});
