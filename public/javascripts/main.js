//Routing
var MainApp = {};

var AppRouter = Backbone.Router.extend({
    routes: {
        "*actions": "defaultRoute" // matches http://example.com/#anything-here
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
      		MainApp.about = new AboutView();
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



//About
var AboutView = Backbone.View.extend({
	el: $('#main-wrap'),
	events: {
		   
	},
	initialize: function(){
    	_.bindAll(this, 'render'); // fixes loss of context for 'this' within methods
    	$(this.el).html('<div class="jumbotron main-page" id="page-about"></div>')
       	this.render(); // not all views are self-rendering. This one is.
    },
    render: function(){

    	$('#page-about').append('<p>Hi</p>');
    	console.log('render view');
    }

});

//Login page
var LoginView = Backbone.View.extend({
	el: $('#main-wrap'),
	events: {
		   
	},
	initialize: function(){
    	_.bindAll(this, 'render'); // fixes loss of context for 'this' within methods
    	$(this.el).html('<div class="jumbotron main-page" id="page-login"></div>')
       	this.render(); // not all views are self-rendering. This one is.
    },
    render: function(){

    	$('#page-login').append('<p><form><input type="text" name="user[name]" place-holder="USERNAME" /><input type="password" name="user[pass]" /><input type="submit" /></form></p>');
    	console.log('render view login');
    }
});

//Home View
var HomeView = Backbone.View.extend({
	el: $('#main-wrap'),
	events: {
		   
	},
	initialize: function(){
    	_.bindAll(this, 'render'); // fixes loss of context for 'this' within methods
    	$(this.el).html('<div class="jumbotron main-page" id="page-home"></div>')
       	this.render(); // not all views are self-rendering. This one is.
    },
    render: function(){
    	$('#page-home').append('<p>This Home</p>');
    	console.log('render view');
    }	
});




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
			$(e.target).parent().addClass('active');
			this.getPage($(e.target).text());

    	},
    	getPage: function(page){
    		page = page.toLowerCase();
    		console.log('calling to %s', page);
    		switch(page){
    			case 'about':
    				console.log('loading about page');
    				MainApp.about = new AboutView();
    				break;
    			case 'login':
    				console.log('login');
    				MainApp.login = new LoginView();
    				break;
    			default:
    				console.log('generating defualt page');
    				MainApp.home = new HomeView();
    				break;
    		}
    	}
	});
	
	MainApp.mainView = new MainView();

})(jQuery);