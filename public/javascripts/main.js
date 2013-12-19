    var AppRouter = Backbone.Router.extend({
        routes: {
            "*actions": "defaultRoute" // matches http://example.com/#anything-here
        }
    });
    // Initiate the router
    var app_router = new AppRouter;

    app_router.on('route:defaultRoute', function(actions) {
        if (actions)
        	actions = actions.toString().toLowerCase();
        else
        	actions = null;
        switch(actions){
        	case 'about':
        		console.log('ur in about...');
        		break;
        	case 'contact':
        		console.log('contact please...');
        		break;
        	default:
        		console.log('thats null');
        		break;
        }
    })

    // Start Backbone history a necessary step for bookmarkable URL's
    Backbone.history.start();
