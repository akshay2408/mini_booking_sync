import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  name: DS.attr('string'),
  daily_rate: DS.attr('number'),
  bookings: DS.hasMany('booking'),
  isNameValid: Ember.computed.notEmpty('name'),
  isDaily_rateValid: Ember.computed.notEmpty('daily_rate'),
  isDaily_rateGT: Ember.computed.gt('daily_rate',0),
  isValid: Ember.computed.and('isNameValid','isDaily_rateValid','isDaily_rateGT'),
  isNotValid:Ember.computed.not('isValid')
});
