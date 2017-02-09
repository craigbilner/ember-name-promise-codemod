import Ember from 'ember';

export default Ember.Object.extend({
  a() {
    Ember.run.schedule('afterRender', () => {
      this.get('b').c('d').then(this._p1.bind(this)).catch(this._p2.bind(this));
    });
  },

  _p1(e) {
    Ember.run(() => {
      e.forEach((record, i) => {

      });
    });
  },

  _p2(a) {
    return a;
  }
});
