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
      user.save().catch(this._p3.bind(this)).catch(this._p2.bind(this)).catch(this._p1.bind(this));
    },
  }
});