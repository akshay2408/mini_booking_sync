import Ember from 'ember';

export default Ember.Component.extend({
  buttonLabel: 'Save',
  start_at:Ember.computed.alias('item.start_at'),
  end_at:Ember.computed.alias('item.end_at'),
  
  bookingDateChange: function() {
    if(this.get('start_at') && this.get('end_at')) {
      let date1 = new Date(this.get('start_at'));
      let date2 = new Date(this.get('end_at'));
      let timeDiff = Math.abs(date2.getTime() - date1.getTime());
      let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
      this.set('item.price', (diffDays * this.get('rental.daily_rate')).toFixed(1)); 
      let rental_id = this.get('rental.id');
      this.set('item.rental_id', rental_id);
    }
  }.observes('start_at', 'end_at'),

  actions: {
    buttonClicked(param) {
      this.sendAction('action', param);
    }
  }
});
