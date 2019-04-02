'use strict';

define("dummy/tests/acceptance/demo-test", ["qunit", "@ember/test-helpers", "ember-qunit"], function (_qunit, _testHelpers, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Acceptance | demo', function (hooks) {
    (0, _emberQunit.setupApplicationTest)(hooks);
    (0, _qunit.test)('the table is rendered with all results by default', async function (assert) {
      await (0, _testHelpers.visit)('/');
      assert.dom('table > tbody > tr').exists({
        count: 5
      });
      assert.dom('#results').doesNotContainText('No results.');
    });
    (0, _qunit.test)('the table is searchable', async function (assert) {
      await (0, _testHelpers.visit)('/');
      await (0, _testHelpers.fillIn)('#query-field', 'sandra');
      assert.dom('table > tbody > tr').exists({
        count: 1
      }, 'the table is filtered down to a single result');
    });
  });
});
define("dummy/tests/helpers/destroy-app", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = destroyApp;

  function destroyApp(application) {
    Ember.run(application, 'destroy');
  }
});
define("dummy/tests/helpers/ember-power-select", ["exports", "ember-power-select/test-support/helpers"], function (_exports, _helpers) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = deprecatedRegisterHelpers;
  _exports.selectChoose = _exports.touchTrigger = _exports.nativeTouch = _exports.clickTrigger = _exports.typeInSearch = _exports.triggerKeydown = _exports.nativeMouseUp = _exports.nativeMouseDown = _exports.findContains = void 0;

  function deprecateHelper(fn, name) {
    return function (...args) {
      (true && !(false) && Ember.deprecate("DEPRECATED `import { ".concat(name, " } from '../../tests/helpers/ember-power-select';` is deprecated. Please, replace it with `import { ").concat(name, " } from 'ember-power-select/test-support/helpers';`"), false, {
        until: '1.11.0',
        id: "ember-power-select-test-support-".concat(name)
      }));
      return fn(...args);
    };
  }

  let findContains = deprecateHelper(_helpers.findContains, 'findContains');
  _exports.findContains = findContains;
  let nativeMouseDown = deprecateHelper(_helpers.nativeMouseDown, 'nativeMouseDown');
  _exports.nativeMouseDown = nativeMouseDown;
  let nativeMouseUp = deprecateHelper(_helpers.nativeMouseUp, 'nativeMouseUp');
  _exports.nativeMouseUp = nativeMouseUp;
  let triggerKeydown = deprecateHelper(_helpers.triggerKeydown, 'triggerKeydown');
  _exports.triggerKeydown = triggerKeydown;
  let typeInSearch = deprecateHelper(_helpers.typeInSearch, 'typeInSearch');
  _exports.typeInSearch = typeInSearch;
  let clickTrigger = deprecateHelper(_helpers.clickTrigger, 'clickTrigger');
  _exports.clickTrigger = clickTrigger;
  let nativeTouch = deprecateHelper(_helpers.nativeTouch, 'nativeTouch');
  _exports.nativeTouch = nativeTouch;
  let touchTrigger = deprecateHelper(_helpers.touchTrigger, 'touchTrigger');
  _exports.touchTrigger = touchTrigger;
  let selectChoose = deprecateHelper(_helpers.selectChoose, 'selectChoose');
  _exports.selectChoose = selectChoose;

  function deprecatedRegisterHelpers() {
    (true && !(false) && Ember.deprecate("DEPRECATED `import registerPowerSelectHelpers from '../../tests/helpers/ember-power-select';` is deprecated. Please, replace it with `import registerPowerSelectHelpers from 'ember-power-select/test-support/helpers';`", false, {
      until: '1.11.0',
      id: 'ember-power-select-test-support-register-helpers'
    }));
    return (0, _helpers.default)();
  }
});
define("dummy/tests/helpers/module-for-acceptance", ["exports", "qunit", "dummy/tests/helpers/start-app", "dummy/tests/helpers/destroy-app"], function (_exports, _qunit, _startApp, _destroyApp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _default;

  function _default(name, options = {}) {
    (0, _qunit.module)(name, {
      beforeEach() {
        this.application = (0, _startApp.default)();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach() {
        let afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Ember.RSVP.resolve(afterEach).then(() => (0, _destroyApp.default)(this.application));
      }

    });
  }
});
define("dummy/tests/helpers/resolver", ["exports", "dummy/resolver", "dummy/config/environment"], function (_exports, _resolver, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  const resolver = _resolver.default.create();

  resolver.namespace = {
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix
  };
  var _default = resolver;
  _exports.default = _default;
});
define("dummy/tests/helpers/start-app", ["exports", "dummy/app", "dummy/config/environment"], function (_exports, _app, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = startApp;

  function startApp(attrs) {
    let attributes = Ember.merge({}, _environment.default.APP);
    attributes.autoboot = true;
    attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

    return Ember.run(() => {
      let application = _app.default.create(attributes);

      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define("dummy/tests/integration/helpers/search-test", ["@ember/test-helpers", "qunit", "ember-qunit", "ember-test-helpers"], function (_testHelpers, _qunit, _emberQunit, _emberTestHelpers) {
  "use strict";

  (0, _qunit.module)('search', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it returns the collection if the query is empty', async function (assert) {
      Ember.set(this, 'collection', Ember.A(['apples', 'bananas', 'oranges']));
      await (0, _emberTestHelpers.render)(Ember.HTMLBars.template({
        "id": "lgunN0Fb",
        "block": "{\"symbols\":[\"result\"],\"statements\":[[0,\"\\n      \"],[7,\"ul\"],[9],[0,\"\\n\"],[4,\"each\",[[27,\"search\",[\"\",[23,[\"collection\"]]],null]],null,{\"statements\":[[0,\"        \"],[7,\"li\"],[9],[1,[22,1,[]],false],[10],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"      \"],[10],[0,\"\\n    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      let results = (0, _testHelpers.findAll)('ul li');
      assert.equal(results.length, 3);
      assert.dom(results[0]).hasText('apples');
      assert.dom(results[1]).hasText('bananas');
      assert.dom(results[2]).hasText('oranges');
    });
    (0, _qunit.test)('it can have zero results', async function (assert) {
      Ember.set(this, 'collection', Ember.A(['apples', 'bananas', 'oranges']));
      await (0, _emberTestHelpers.render)(Ember.HTMLBars.template({
        "id": "ieWyu+i5",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"unless\",[[27,\"search\",[\"kirby\",[23,[\"collection\"]]],null]],null,{\"statements\":[[0,\"        \"],[7,\"p\"],[9],[0,\"No results.\"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.dom('p').hasText('No results.');
    });
    (0, _qunit.test)('it renders a searched state', async function (assert) {
      Ember.set(this, 'collection', Ember.A(['apples', 'bananas', 'oranges']));
      await (0, _emberTestHelpers.render)(Ember.HTMLBars.template({
        "id": "4pjAqV61",
        "block": "{\"symbols\":[\"result\"],\"statements\":[[0,\"\\n      \"],[7,\"ul\"],[9],[0,\"\\n\"],[4,\"each\",[[27,\"search\",[\"Apples\",[23,[\"collection\"]]],null]],null,{\"statements\":[[0,\"        \"],[7,\"li\"],[9],[1,[22,1,[]],false],[10],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"      \"],[10],[0,\"\\n    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.dom('ul li').exists({
        count: 1
      });
      assert.dom('ul li').hasText('apples');
    });
    (0, _qunit.test)('the results can match partial queries', async function (assert) {
      Ember.set(this, 'collection', Ember.A(['apples', 'bananas', 'oranges']));
      await this.render(Ember.HTMLBars.template({
        "id": "pGdxDJyD",
        "block": "{\"symbols\":[\"result\"],\"statements\":[[0,\"\\n      \"],[7,\"ul\"],[9],[0,\"\\n\"],[4,\"each\",[[27,\"search\",[\"GES\",[23,[\"collection\"]]],null]],null,{\"statements\":[[0,\"        \"],[7,\"li\"],[9],[1,[22,1,[]],false],[10],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"      \"],[10],[0,\"\\n    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.dom('ul li').exists({
        count: 1
      });
      assert.dom('ul li').hasText('oranges');
    });
    (0, _qunit.test)('the results can be forced to match the case of the query', async function (assert) {
      Ember.set(this, 'collection', Ember.A(['apples', 'bananas', 'oranges']));
      await this.render(Ember.HTMLBars.template({
        "id": "fb78mj9S",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"unless\",[[27,\"search\",[\"GES\",[23,[\"collection\"]]],[[\"caseSensitive\"],[true]]]],null,{\"statements\":[[0,\"        \"],[7,\"p\"],[9],[0,\"No results.\"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.dom('p').hasText('No results.');
    });
    (0, _qunit.test)('the results change when the query changes', async function (assert) {
      Ember.set(this, 'collection', Ember.A(['apples', 'bananas', 'oranges']));
      Ember.set(this, 'query', 'apples');
      await (0, _emberTestHelpers.render)(Ember.HTMLBars.template({
        "id": "/m7dPvof",
        "block": "{\"symbols\":[\"result\"],\"statements\":[[0,\"\\n      \"],[1,[27,\"input\",null,[[\"value\",\"on-key-press\"],[[23,[\"query\"]],[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"query\"]]],null]],null]]]],false],[0,\"\\n\\n      \"],[7,\"ul\"],[9],[0,\"\\n\"],[4,\"each\",[[27,\"search\",[[23,[\"query\"]],[23,[\"collection\"]]],null]],null,{\"statements\":[[0,\"          \"],[7,\"li\"],[9],[1,[22,1,[]],false],[10],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"      \"],[10],[0,\"\\n    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.dom('ul li').exists({
        count: 1
      });
      assert.dom('ul li').hasText('apples');
      await (0, _testHelpers.fillIn)('input', 'bananas');
      assert.dom('ul li').exists({
        count: 1
      });
      assert.dom('ul li').hasText('bananas');
    });
    (0, _qunit.test)('the results can be forced to be an exact match of the query', async function (assert) {
      Ember.set(this, 'collection', Ember.A(['apples', 'bananas', 'oranges']));
      Ember.set(this, 'query', 'app');
      await (0, _emberTestHelpers.render)(Ember.HTMLBars.template({
        "id": "amtFLSlO",
        "block": "{\"symbols\":[\"result\"],\"statements\":[[0,\"\\n      \"],[7,\"ul\"],[9],[0,\"\\n\"],[4,\"each\",[[27,\"search\",[[23,[\"query\"]],[23,[\"collection\"]]],[[\"exactMatch\"],[true]]]],null,{\"statements\":[[0,\"          \"],[7,\"li\"],[9],[1,[22,1,[]],false],[10],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"      \"],[10],[0,\"\\n    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.dom('ul li').doesNotExist();
      Ember.run(() => {
        Ember.set(this, 'query', 'apples');
      });
      assert.dom('ul li').exists({
        count: 1
      });
      assert.dom('ul li').hasText('apples');
    });
    (0, _qunit.test)('properties can be an array of synchronous props', async function (assert) {
      Ember.set(this, 'collection', Ember.A([{
        name: "apples",
        opinion: "okay"
      }, {
        name: "bananas",
        opinion: "gross"
      }, {
        name: "oranges",
        opinion: "awesome"
      }]));
      Ember.set(this, 'properties', Ember.A(['name', 'opinion']));
      Ember.set(this, 'query', 'apples');
      await (0, _emberTestHelpers.render)(Ember.HTMLBars.template({
        "id": "id5zba7Y",
        "block": "{\"symbols\":[\"result\"],\"statements\":[[0,\"\\n      \"],[1,[27,\"input\",null,[[\"value\",\"on-key-press\"],[[23,[\"query\"]],[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"query\"]]],null]],null]]]],false],[0,\"\\n\\n      \"],[7,\"ul\"],[9],[0,\"\\n\"],[4,\"each\",[[27,\"search\",[[23,[\"query\"]],[23,[\"collection\"]]],[[\"properties\"],[[23,[\"properties\"]]]]]],null,{\"statements\":[[0,\"          \"],[7,\"li\"],[9],[1,[22,1,[\"name\"]],false],[0,\" (\"],[1,[22,1,[\"opinion\"]],false],[0,\")\"],[10],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"      \"],[10],[0,\"\\n    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.dom('ul li').exists({
        count: 1
      });
      assert.dom('ul li').hasText('apples (okay)');
      await (0, _testHelpers.fillIn)('input', 'awesome');
      assert.dom('ul li').exists({
        count: 1
      });
      assert.dom('ul li').hasText('oranges (awesome)');
    });
    (0, _qunit.test)('it updates the results if the collection is updated', async function (assert) {
      Ember.set(this, 'collection', Ember.A(['apples', 'bananas', 'oranges']));
      await (0, _emberTestHelpers.render)(Ember.HTMLBars.template({
        "id": "lgunN0Fb",
        "block": "{\"symbols\":[\"result\"],\"statements\":[[0,\"\\n      \"],[7,\"ul\"],[9],[0,\"\\n\"],[4,\"each\",[[27,\"search\",[\"\",[23,[\"collection\"]]],null]],null,{\"statements\":[[0,\"        \"],[7,\"li\"],[9],[1,[22,1,[]],false],[10],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"      \"],[10],[0,\"\\n    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      let results = (0, _testHelpers.findAll)('ul li');
      assert.equal(results.length, 3);
      assert.dom(results[0]).hasText('apples');
      assert.dom(results[1]).hasText('bananas');
      assert.dom(results[2]).hasText('oranges');
      Ember.run(() => {
        Ember.get(this, 'collection').pushObject('mangoes');
      });
      assert.dom('ul li').exists({
        count: 4
      });
    });
  });
});
define("dummy/tests/lint/app.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | app');
  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });
  QUnit.test('controllers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/application.js should pass ESLint\n\n');
  });
  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });
  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
  QUnit.test('routes/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/application.js should pass ESLint\n\n');
  });
});
define("dummy/tests/lint/templates.template.lint-test", [], function () {
  "use strict";

  QUnit.module('TemplateLint');
  QUnit.test('dummy/templates/application.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'dummy/templates/application.hbs should pass TemplateLint.\n\ndummy/templates/application.hbs\n  36:14  error  elements cannot have inline styles  no-inline-styles\n');
  });
});
define("dummy/tests/lint/tests.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | tests');
  QUnit.test('acceptance/demo-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/demo-test.js should pass ESLint\n\n');
  });
  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });
  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });
  QUnit.test('helpers/resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass ESLint\n\n');
  });
  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });
  QUnit.test('integration/helpers/search-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/helpers/search-test.js should pass ESLint\n\n');
  });
  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
});
define("dummy/tests/test-helper", ["dummy/app", "dummy/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define('dummy/config/environment', [], function() {
  var prefix = 'dummy';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('dummy/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
