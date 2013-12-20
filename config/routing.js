module.exports = function(app, routes){

	//ROUTING
	app.get('/', routes.index);

	app.get('/users', routes.list);
	
	app.post('/api/authentication', function(req, res){
		//Validate User name and Password;
		var auth = req.body;
		if (auth.Username === 'admin' && auth.Password === 'admin')
			res.json({ authenticate: true, username: 'admin', session: '123fdsaf34rfad', logintime: new Date()});
		else
			res.json({ authenticate: false });
	});

}