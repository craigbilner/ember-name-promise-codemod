import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updateUser(user) {
      user.save().catch((a) => {
        return user.reload();
      }).catch(() => {
        this.notifyAboutSuccess();
      }).catch(c => 5);
    },
  },
});
