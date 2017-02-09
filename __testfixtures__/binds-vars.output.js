import Ember from 'ember';

export default Ember.Component.extend({
  _p4(a) {
    const g = 5;
    return user.reload(a, g);
  },

  _p3(b, f, c) {
    const h = 8;
    this.notifyAboutSuccess(b, c, f, h);
  },

  _p2(d, e) {
    return d + d + e;
  },

  _p1(j, ...args) {
    return this.handler(...args, null, undefined);
  },

  actions: {
    updateUser(user, f) {
      const a = 1;
      const b = 2;
      const d = 3;
      user.save().then(this._p4.bind(this, a)).then(this._p3.bind(this, b, f)).then(this._p2.bind(this, d))
        .then(this._p1.bind(this));
    },
  }
});
