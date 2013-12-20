//Routing
var MainApp = {};

var AppRouter = Backbone.Router.extend({
    routes: {
        "*actions": "defaultRoute" // matches http://example.com/#anything-here
    }
});

var AboutView = Backbone.View.extend({
	el: $('body'),
	events: {
		   
	},
	initialize: function(){
    	_.bindAll(this, 'render'); // fixes loss of context for 'this' within methods

       	this.render(); // not all views are self-rendering. This one is.
    },
    render: function(){
    	console.log('render view');
    }

});
// Initiate the router
MainApp.mainRouter = new AppRouter;

MainApp.mainRouter.on('route:defaultRoute', function(actions) {
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


//View
(function($){

	var MainView = Backbone.View.extend({ 
		el: $('body'),
		events: {
		    "click .menu-btn": "menuClick",
		  },

		initialize: function(){
      		_.bindAll(this, 'render'); // fixes loss of context for 'this' within methods

       		this.render(); // not all views are self-rendering. This one is.
    	},

    	render: function(){
    		console.log('render view');
    	},
    	menuClick: function(e){
    		e.preventDefault();
    		//Remove active
    		$('#header-menu-ul > li').each(function(x,y){
    			if ($(y).attr('class').indexOf('active') != -1)
    				$(y).removeClass('active');
    		});

    		//adding the active class to the choosen menu li
			$(e.target).parent().addClass('active')	
    	}
	});
	
	MainApp.mainView = new MainView();

})(jQuery);