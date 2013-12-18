
/*
 * GET home page.
 */

exports.index = function(req, res){
	
	res.locals = {
		title: 'Some title'
	};

	return res.render('layout/index', 
		{ 
			partials:
			{ 
				footer: 'includes/footer',
				header: 'includes/header'

			} 
		} 
	);
};