/* eslint-disable ember/use-ember-data-rfc-395-imports */
/* eslint-disable ember/no-classic-classes */
import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'http://localhost:3000',
});
