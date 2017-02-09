import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updateUser(user, f) {
      const a = 1;
      const b = 2;
      const d = 3;
      user.save().then(this._p5.bind(this, a)).then(this._p4.bind(this, b, f)).then(this._p3.bind(this, d))
        .then(this._p2.bind(this))
        .then(this._p1.bind(this));
    },
  },

  _p1([{ foo: { foo2, foo3 } }, [ { bar: [ { bar1 }, bar2] }, baz] ]) {
    return [foo2, foo3, bar1, bar2];
  },

  _p2(j, ...args) {
    return this.handler(...args, null, undefined);
  },

  _p3(d, e) {
    return d + d + e;
  },

  _p4(b, f, c) {
    const h = 8;
    this.notifyAboutSuccess(b, c, f, h);
  },

  _p5(a) {
    const g = 5;
    return user.reload(a, g);
  }
});
