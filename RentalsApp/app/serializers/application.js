/* eslint-disable ember/use-ember-data-rfc-395-imports */
/* eslint-disable ember/no-classic-classes */
import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  primaryKey: '_id',
  serializeId: function (id) {
    return id.toString();
  },
});
