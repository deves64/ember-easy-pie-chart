import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | easy-pie-chart', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(2);
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{easy-pie-chart}}`);

    assert.equal(this.element.textContent.trim(), '0%');

    // Template block usage:
    await render(hbs`
      {{#easy-pie-chart}}
        template block text
      {{/easy-pie-chart}}
    `);

    assert.equal(this.element.textContent.trim(), 'template block text');
  });

  test('update percent', async function(assert) {
    assert.expect(2);

    this.set('percent', '0');

    await render(hbs`{{easy-pie-chart percent=percent}}`);

    assert.equal(this.element.textContent.trim(), '0%', 'Starts with 0%');

    this.set('percent', '55');

    assert.equal(this.element.textContent.trim(), '55%', 'Starts with 55%');
  });
});
