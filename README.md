# Ember name promise codemod

To conform to [this linting rule](https://github.com/netguru/eslint-plugin-ember/blob/master/docs/rules/named-functions-in-promises.md),
this codemod replaces promise chains with anonymous functions with named versions.

## Changes

### willChange

```js
import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updateUser(user) {
      user.save().then((a) => {
        return user.reload();
      }).then(() => {
        this.notifyAboutSuccess();
      }).then((c) => 5);
    },
  },
});
```

will become

```js
import Ember from 'ember';

export default Ember.Component.extend({
  _p3(a) {
    return user.reload();
  },

  _p2() {
    this.notifyAboutSuccess();
  },

  _p1(c) {
    return 5;
  },

  actions: {
    updateUser(user) {
      user.save().then(this._p3.bind(this)).then(this._p2.bind(this)).then(this._p1.bind(this));
    },
  },
});
```

### wontChange

non-anonymous functions

```js
import Ember from 'ember';
import foo from 'somewhere';
import bar from 'somewhereElse';

export default Ember.Component.extend({
  _p1()  {
    return user.reload();
  },
  _p2() {
    this.notifyAboutSuccess();
  },
  _p3() {
    return 5;
  },
  actions: {
    updateUser(user) {
      user.save()
        .then(this._p1.bind(this))
        .then(this._p2.bind(this))
        .then(foo)
        .then(bar.baz);
    },
  },
});
```
