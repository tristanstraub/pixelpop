require.config({
  shim: {
    ember: {
      deps: ['handlebars'],
      exports: 'Ember'
    },

    kinetic: {
      exports: 'Kinetic'
    },

    underscore: {
      exports: '_'
    }
  },

  packages: [
    { 
      name: 'ember-rig',
      location: '../../components/ember-rig/src',  // default 'packagename'
      main: 'rig'                // default 'main' 
    }
  ],

  paths: {
    hm: 'vendor/hm',
    esprima: 'vendor/esprima',
    jquery: 'vendor/jquery.min',
    handlebars: '../../components/handlebars/handlebars',
    ember: '../../components/ember/ember',
    underscore: '../../components/underscore/underscore',
    kinetic: '../../components/kinetic/dist/kinetic-vcurrent'//,
//    'ember-rig': '../../components/ember-rig/src/rig'
  }
});
 
require(['pixelpop/pixelpop'], function(pixelpop) {


});