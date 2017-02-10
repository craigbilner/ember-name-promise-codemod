import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updateUser(user) {
      user.save().catch(this._p3.bind(this, user)).catch(this._p2.bind(this)).catch(this._p1.bind(this));
    },
  },

  _p1(c) {
    return 5;
  },

  _p2() {
    this.notifyAboutSuccess();
  },

  _p3(user, a) {
    return user.reload();
  }
});
