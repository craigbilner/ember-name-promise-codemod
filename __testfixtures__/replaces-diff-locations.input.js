import Ember from 'ember';

export default Ember.Object.extend({
  a() {
    Ember.run.schedule('afterRender', () => {
      this.get('b').c('d').then((e) => {
        Ember.run(() => {
          e.forEach((record, i) => {

          });
        });
      }).catch(a => a);
    });
  },
});
