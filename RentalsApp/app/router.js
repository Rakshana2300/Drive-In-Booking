import EmberRouter from '@ember/routing/router';
import config from 'rentals-app/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('about');
  this.route('contact');
  this.route('rental', { path: 'rental/:rental_id' });
});
