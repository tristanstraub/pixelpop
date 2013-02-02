define(['ember', 'ember-rig'], function(Ember, Rig) {
  var set = Ember.set, get = Ember.get;
  
  return Ember.StateManager.extend(Rig.Soul, {
    initialState: 'idle',

    idle: Rig.MouseEvents.MouseState.extend({
      mouseDown: function(manager, event) {
        var view = event.context;
        view.drawAtEventPoint(event);
        manager.transitionTo('draw');
      }
    }),

    draw: Rig.MouseEvents.MouseState.extend({
      mouseMove: function(manager, event) {
        var view = event.context;
        view.drawAtEventPoint(event);
      },

      mouseUp: function(manager, event) {
        var view = event.context;
        view.drawAtEventPoint(event);
        manager.transitionTo('idle');
      }      
    })
  });
});
