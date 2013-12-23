module.exports = function(auth){

	var mongoose = require('mongoose');
	mongoose.connect('mongodb://localhost/languin');
	
	var db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connection error:'));
	db.once('open', function callback () {
		var authenticationSchema = mongoose.Schema({
		    username: String,
		    password: String,
		    email: String,
		    age: Number,
		    type: Number,
		    title: String,
		    active: Boolean,
		    date: { type: Date, default: Date.now },
		    rating: {
		    	votes: Number, //Total voters
		    	rating: Number	//rating grade
		    }
		});

		var User = mongoose.model('User', authenticationSchema);

		User.findOne({ 'username': 'admin' }, 'name occupation', function (err, user) {
	  		if (err) return handleError(err);
	  			console.log('username: %s.', user) // Space Ghost is a talk show host.
		});	
	});  		

}



