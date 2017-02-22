import Ember from 'ember';
import SOME_ENUM from 'somewhere';

export default Ember.Component.extend({
  onInit: Ember.on('init', function() {
    this.get('someService')
      .getSomething([SomeEnum.FOO, SomeEnum.BAR, SomeEnum.BAZ])
      .then(this._p1.bind(this));
  }),

  actions: {
    updateUser(user) {
      user.save().then(this._p4.bind(this, user)).then(this._p3.bind(this)).then(this._p2.bind(this));
    },
  },

  _p1({ foo = true, bar = SOME_ENUM.BASH, baz = false }) {
      this.setProperties({ foo, bar, showSomething: baz });
    },

  _p2(c) {
    return 5;
  },

  _p3() {
    this.notifyAboutSuccess();
  },

  _p4(user, a) {
    return user.reload();
  }
});
