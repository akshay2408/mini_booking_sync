import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  headers: {
    'AUTHENTICATION': '8ad2594413184072b9eb2eef519fa70c',
  }
});
