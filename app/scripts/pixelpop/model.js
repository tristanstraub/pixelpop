define(['ember', 'ember-rig'],function(Ember, Rig) {
  var Model = Ember.Namespace.create({ 
    toString: function() { return "Model"; }
  });

  Model.Item = Ember.Object.extend(Rig.Soul, {
    animations: null,
    init: function() {
      set(this, 'animations', []);

      this._super.apply(this, arguments);
    }
  });

  Model.Animation = Ember.Object.extend(Rig.Soul, {
    frames: null,
    init: function() {
      set(this, 'frames', []);

      this._super.apply(this, arguments);
    }
  });

  Model.Frame = Ember.Object.extend(Rig.Soul, {
    pixels: null,
    init: function() {
      set(this, 'pixels', []);

      this._super.apply(this, arguments);
    }
  });

  return Model;
});
