import Ember from 'ember';
import foo from 'somewhere';
import bar from 'somewhere';

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
