import Ember from 'ember';

export default Ember.Controller.extend({
  start_at:Ember.computed.alias('model.start_at'),
  end_at:Ember.computed.alias('model.end_at'),
  total_price:0,
  bookingDateChange: function() {
    if(this.get('start_at') && this.get('end_at')) {
      let date1 = new Date(this.get('start_at'));
      let date2 = new Date(this.get('end_at'));
      let timeDiff = Math.abs(date2.getTime() - date1.getTime());
      let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
      this.set('total_price', (diffDays * this.get('rental.daily_rate')).toFixed(1));
      this.set('model.price', (diffDays * this.get('rental.daily_rate')).toFixed(1)); 
      let rental_id = this.get('rental.id');
      this.set('model.rental_id', rental_id);
    }
  }.observes('start_at', 'end_at'),

});
