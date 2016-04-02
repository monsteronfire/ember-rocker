import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('artists', function() {
    this.route('songs', { path: ':slug' });
  });
});

export default Router;
