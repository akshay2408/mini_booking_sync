import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('rentals', function() {
    this.route('new');
    this.route('edit', {path:'/edit/:id'});
  });

  this.route('bookings', function() {
    this.route('new', {path: '/new/:rental_id'});
  });
});

export default Router;
