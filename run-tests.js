if( !process.env.NODE_ENV ) process.env.NODE_ENV = 'test';

var path = require('path');

// find out the current paths
//console.log(require.paths);
// I have ~/.node_modules in there, which did not exist and did a
// ln -s ~/local/lib/node_modules/ ~/.node_modules
// my jasmine-node/cli.js is in
// ~/local/lib/node_modules/jasmine-node/lib/jasmine-node/cli.js

// Add the local lib path to allow the specs to require from there
require.paths.unshift(path.join(__dirname, 'lib'));

require('jasmine-node/lib/jasmine-node/cli.js');