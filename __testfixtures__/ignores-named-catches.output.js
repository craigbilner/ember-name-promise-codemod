import Ember from 'ember';

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
        .catch(this._p1.bind(this))
        .catch(this._p2.bind(this))
        .catch(this._p3.bind(this));
    },
  },
});
