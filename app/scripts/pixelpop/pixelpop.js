define(['underscore','ember', 'ember-rig', 'kinetic', './model', './draw-state-manager', './canvas-view'], function(_, Ember, Rig, Kinetic, Model, DrawStateManager, CanvasView) {
  var get = Ember.get, set = Ember.set;

  PixelPop = new Ember.Application();

  PixelPop.Router.map(function() {
    this.resource('images', { path: '/images' }, function() {
      this.route('new');
    });
  });

  PixelPop.IndexRoute = Ember.Route.extend({
    redirect: function() {
      this.transitionTo('images');
    }
  });
  
  PixelPop.ImagesRoute = Ember.Route.extend({
    setupController: function(controller) {
      set(controller, 'title', 'test');
    }
  });

  PixelPop.CanvasView = CanvasView;

  return PixelPop;
});
