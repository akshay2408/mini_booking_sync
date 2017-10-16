import DS from 'ember-data';
import Ember from 'ember';


export default DS.Model.extend({
  start_at: DS.attr('date'),
  end_at: DS.attr('date'),
  client_email: DS.attr('string'),
  price: DS.attr('number'),
  rental_id: DS.attr('number'),
  rental: DS.belongsTo('rental'),

  isStartAtValid: Ember.computed.notEmpty('start_at'),
  isEndAtValid: Ember.computed.notEmpty('end_at'),
  isEmailValid: Ember.computed.match('client_email', /^.+@.+\..+$/),
  isValid: Ember.computed.and('isStartAtValid', 'isEndAtValid', 'isEmailValid'),
  isNotValid: Ember.computed.not('isValid'),
});
