/* eslint-disable no-undef */
/* eslint-disable ember/new-module-imports */
import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('rental', params.rental_id);
  },
});
