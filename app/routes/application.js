import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    let obj = {};
    return Ember.$.get('/api/value',function () {
      alert('Sending Request');
    }).then(function (data) {
      obj.responseVal = data.item;
      return obj;
    });
  }
});
