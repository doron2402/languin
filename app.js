
/**
 * Module dependencies.
 */

var express = require('express')
	,routes = require('./routes')
	,user = require('./routes/user')
	,http = require('http')
	,path = require('path')
	,configuration = require('./config')()
    ,mongoose = require ('mongoose')
	,auth = require('./lib/auth')();


var app = express();

//mongodb server
mongoose.connect( "mongodb://localhost:27017");

app.engine('html', require('hogan-express'));
app.enable('view cache');

// all environments
app.set('port', configuration.port || process.env.PORT );
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');


//Global Configuration
app.use(function(req, res, next){
	res.locals = ({
  		title: 'My App!',
  		project_name: 'My project Name',
  		phone: '1-250-858-9990',
  		support_email: 'support@myapp.com',
  		sales_email: 'sales@myapp.com'
	});
	next();
});

app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(express.bodyParser());
app.use(app.router);
app.use(require('less-middleware')({ src: path.join(__dirname, 'public') }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('less-middleware')({ src: path.join(__dirname, 'bower_copmnents') }));
app.use(express.static(path.join(__dirname, 'bower_copmnents')));



// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

/* App Routing */
var routing = require('./config/routing')(app, routes);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
