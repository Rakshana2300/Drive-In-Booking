/* eslint-disable ember/new-module-imports */
/* eslint-disable ember/use-ember-data-rfc-395-imports */
/* eslint-disable ember/no-classic-classes */
import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  image: DS.attr('string'),
  description: DS.attr('string'),
  subheading: DS.attr('string'),
  subdesc: DS.attr('string'),
});
