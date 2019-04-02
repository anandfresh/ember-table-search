import { module, test } from 'qunit';
import { visit, fillIn } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | demo', function(hooks) {
  setupApplicationTest(hooks);

  test('the table is rendered with all results by default', async function(assert) {
    await visit('/');

    assert.dom('table > tbody > tr').exists({ count: 5 });
    assert.dom('#results').doesNotContainText('No results.');
  });

  test('the table is searchable', async function(assert) {
    await visit('/');
    await fillIn('#query-field', 'sandra');

    assert.dom('table > tbody > tr').exists({ count: 1 }, 'the table is filtered down to a single result');
  });

});
