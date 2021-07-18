/* eslint-disable ember/new-module-imports */
/*import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  async model() {
    /*
    return {
      title: 'ITC Grand Chola',
      image:
        'https://cf.bstatic.com/xdata/images/hotel/max1280x900/44650311.jpg?k=80a73dfb02a3c3b09500b81fb08c106659681b26e6f3fa3ebf790ee3595aa205&o=&hp=1',
      description:
        'Situated along Mount Road in Chennai, ITC Grand Chola is 8 km from the Chennai International Airport. It features 10 dining options and an outdoor swimming pool and a fitness centre. The best stay ever! Great place to completely spoil yourself. No need to leave the hotel. There are amazing restaurants, cafes, pools.',
      subheading: 'Most popular facilities',
      subdesc:
        'Swimming pool   \xa0\xa0\xa0\
        Free WiFi   \xa0\xa0\xa0\
        Airport shuttle  \xa0\xa0\xa0\
        Family rooms  \xa0\xa0\xa0\
        Free parking  \xa0\xa0\xa0\
        Fitness centre  \xa0\xa0\xa0\
        Bar',
    };*/
/*
    let response = await fetch('/api/rentals.json');
    let { data } = await response.json();

    return data.map((model) => {
      let { attributes } = model;
      return { ...attributes };
    });
  }
}*/

import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return this.store.findAll('rental');
  },
});
