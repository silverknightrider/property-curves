var mojs = require('mo-js');
var Howl = require('howler').Howl;
require('./css/styles.styl');

// SCENES
var cube = require('./scenes/cube/cube.es6.js')
var mole = require('./scenes/mole/mole.es6.js')

var main = {
  s: 1 // global time coefficient
}

cube.init(main);
mole.init(main);