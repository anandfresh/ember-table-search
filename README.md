# ember-table-search

This app is used to search for records within a table


## Compatibility

* Ember.js v2.18 or above
* Ember CLI v2.13 or above

## Examples

The `search` helper can filter simple arrays:

```javascript
// controller.js

export default Ember.Controller.extend({
  fruits: ['Apple', 'Banana', 'Orange']
  query: 'Oran'
});
```

```hbs
{{input value=query on-key-press=(action (mut query))}}

<ul>
{{#each (search query fruits) as |fruit|}}
  <li>{{fruit}}</li>
{{/each}}
</ul>
```

And arrays of objects:

```javascript
// controller.js

export default Ember.Controller.extend({
  fruits: [
    {
      name: 'Apple',
      opinion: 'Meh'
    },
    {
      name: 'Orange',
      opinion: 'Yay'
    },
    {
      name: 'Banana',
      opinion: 'Nay'
    }
  ],
  searchProperties: ['name', 'opinion'],
  query: 'ay'
});
```

```hbs
{{input value=query on-key-press=(action (mut query))}}

<ul>
{{#each (search query fruits properties=searchProperties) as |fruit|}}
  <li>{{fruit.name}}</li>
{{/each}}
</ul>
```

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
