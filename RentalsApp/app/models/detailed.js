import Model, { attr } from '@ember-data/model';

export default class DetailedModel extends Model {
  @attr('number') amount;
  @attr('number') rooms;
  @attr('number') days;
}
