/* eslint-disable ember/new-module-imports */
import Component from '@glimmer/component';
import { action } from '@ember/object';
import Ember from 'ember';

export default class DetailedComponent extends Component {
  isBooked() {
    if (this.total > 0) return true;
    else return false;
  }
  @action
  bookDate(amount) {
    var diffTime = this.end.getTime() - this.start.getTime();
    var diffDays = diffTime / (1000 * 3600 * 24);
    var total = parseInt(amount) * diffDays * this.room;
    Ember.set(this, 'total', total);
    Ember.set(this, 'days', diffDays);
    Ember.set(this, 'rooms', this.room);
    Ember.set(this, 'rate', amount);
    this.router.transitionTo('bill');
  }
  @action
  startDate(date) {
    Ember.set(this, 'start', date);
  }
  @action
  endDate(date) {
    Ember.set(this, 'end', date);
  }
}
