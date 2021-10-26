import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | detailed', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:detailed');
    assert.ok(route);
  });
});
