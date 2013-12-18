
/*
 * GET home page.
 */

exports.index = function(req, res){

	res.locals = {
		title: res.locals.title,
		project_name: res.locals.project_name
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