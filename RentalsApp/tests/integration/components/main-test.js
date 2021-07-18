import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | main', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the content inside a main header with a tomster', async function (assert) {
    await render(hbs`<Main>Hello World</Main>`);
    assert.dom('.main').exists();
    assert.dom('.main').hasText('Hello World');
  });
});
