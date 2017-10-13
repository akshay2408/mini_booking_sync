import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  name: DS.attr('string'),
  daily_rate: DS.attr('number'),
  isNameValid: Ember.computed.notEmpty('name'),
  isDaily_rateValid: Ember.computed.notEmpty('daily_rate'),
  isValid: Ember.computed.and('isNameValid','isDaily_rateValid'),
  isNotValid:Ember.computed.not('isValid')
});
