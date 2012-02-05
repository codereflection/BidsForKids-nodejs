
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , app = module.exports = express.createServer()
  , procurements = require('./procurements')

//var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
  app.set('view options', { pretty: true });
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
  app.set('view options', { pretty: false });
});

// Routes

app.get('/', routes.index);
app.get('/procurements', procurements.index);
app.get('/procurement/:id', procurements.view);
app.get('/procurement/:id/view', procurements.view);
app.get('/procurement/:id/edit', procurements.edit);

app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
