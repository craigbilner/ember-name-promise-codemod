import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updateUser(user, f) {
      const a = 1;
      const b = 2;
      const d = 3;
      user.save().then(this._p8.bind(this, user, a)).then(this._p7.bind(this, b, f)).then(this._p6.bind(this, d))
        .then(this._p5.bind(this))
        .then(this._p4.bind(this))
        .then(this._p3.bind(this, d, a))
        .then(this._p2.bind(this))
        .then(this._p1.bind(this, f));
    },
  },

  _p1(f, o) {
    return o[f];
  },

  _p2(l) {
    l.forEach(function(m, n) {
      m.set('n', n);
    });
  },

  _p3(d, a, [k]) {
    Ember.run(() => {
      d
        .objectAt(a)
        .set('record', k);
    });
  },

  _p4([{ foo: { foo2, foo3 } }, [{ bar: [{ bar1 }, bar2] }, baz]]) {
    return [foo2, foo3, bar1, bar2];
  },

  _p5(j, ...args) {
    return this.handler(...args, null, undefined);
  },

  _p6(d, e) {
    return d + d + e;
  },

  _p7(b, f, c) {
    const h = 8;
    this.notifyAboutSuccess(b, c, f, h);
  },

  _p8(user, a) {
    const g = 5;
    return user.reload(a, g);
  }
});
