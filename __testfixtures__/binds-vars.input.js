import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updateUser(user, f) {
      const a = 1;
      const b = 2;
      const d = 3;
      user.save().then(() => {
        const g = 5;
        return user.reload(a, g);
      }).then((c) => {
        const h = 8;
        this.notifyAboutSuccess(b, c, f, h);
      }).then((e) => d + d + e)
        .then((j, ...args) => this.handler(...args, null, undefined))
        .then(([{ foo: { foo2, foo3 } }, [{ bar: [{ bar1 }, bar2] }, baz]]) => [foo2, foo3, bar1, bar2])
        .then(([k]) => {
          Ember.run(() => {
            d
              .objectAt(a)
              .set('record', k);
          });
        })
        .then((l) => {
          l.forEach(function(m, n) {
            m.set('n', n);
          });
        });
    },
  },
});
