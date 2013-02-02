define(['ember', 'ember-rig', './draw-state-manager'], function(Ember, Rig, DrawStateManager) {
  var set = Ember.set, get = Ember.get;
  
  return Ember.View.extend(Rig.MouseEvents.ManagedEvents('drawStateManager'), {
    drawStateManager: null,

    rectangles: null,
    layer: null,

    init: function() {
      this._super.apply(this, arguments);
      set(this, 'drawStateManager', new DrawStateManager());
      set(this, 'rectangles', []);
    },

    drawAtEventPoint: function(event) {
      var offset = this.$().offset();
      var x = event.pageX - offset.left;
      var y = event.pageY - offset.top;

      var i = (x / 16) | 0;
      var j = (y / 16) | 0;

      if (0 <= i && i < 16 && 0 <= j && j < 16) {
        get(this, 'rectangles').objectAt(i+j*16).setFill('black');

        get(this, 'layer').draw();
      }
    },

    didInsertElement: function() {
       var stage = new Kinetic.Stage({
        container: this.$().get(0),
        width: 16*16,
        height: 16*16
      });

      var layer = new Kinetic.Layer();
      set(this, 'layer', layer);

      var gridRectangle = function(i, j) {
        var rect = new Kinetic.Rect({
          x: i*16,
          y: j*16,
          width: 16,
          height: 16,
          fill: 'green',
          stroke: 'black',
          strokeWidth: 1
        });

        return rect;
      };

      var rectangles = get(this, 'rectangles');
      _.each(_.range(0,16), function(j) {
        _.each(_.range(0,16), function(i) {
          var rect = gridRectangle(i, j);
          layer.add(rect);
          rectangles.push(rect);
        }, this);
      }, this);

      // add the layer to the stage
      stage.add(layer);
    }
  });
});
