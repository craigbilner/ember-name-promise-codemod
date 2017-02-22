import Ember from 'ember';
import SOME_ENUM from 'somewhere';

export default Ember.Component.extend({
  onInit: Ember.on('init', function() {
    this.get('someService')
      .getSomething([SomeEnum.FOO, SomeEnum.BAR, SomeEnum.BAZ])
      .then(({ foo = true, bar = SOME_ENUM.BASH, baz = false }) => {
        this.setProperties({ foo, bar, showSomething: baz });
      });
  }),

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
