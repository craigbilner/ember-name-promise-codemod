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
