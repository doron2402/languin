
/**
 * Module dependencies.
 */

var express = require('express')
	,routes = require('./routes')
	,user = require('./routes/user')
	,http = require('http')
	,path = require('path')
	,configuration = require('./config')();

var app = express();

app.engine('html', require('hogan-express'));
app.enable('view cache');

// all environments
app.set('port', configuration.port || process.env.PORT );
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(require('less-middleware')({ src: path.join(__dirname, 'public') }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('less-middleware')({ src: path.join(__dirname, 'bower_copmnents') }));
app.use(express.static(path.join(__dirname, 'bower_copmnents')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
