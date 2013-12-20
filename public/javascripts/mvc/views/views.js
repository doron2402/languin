//About Page
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
    model: new MainApp.Model.authentication(),
	events: {
		'submit': 'submitLoginForm'   
	},
	initialize: function(){
    	_.bindAll(this, 'render'); // fixes loss of context for 'this' within methods
    	$(this.el).html('<div class="container main-page" id="page-login"></div>')
       	this.render(); // not all views are self-rendering. This one is.
    },
    render: function(){

    	$('#page-login').append('<form class="form-signin"><h2 class="form-signin-heading">Please sign in</h2><input type="text" class="input-block-level" name="user[name]" placeholder="Username"><input type="password" name="user[pass]" class="input-block-level" placeholder="Password"><label class="checkbox"><input type="checkbox" value="remember-me"> Remember me</label><button class="btn btn-large btn-primary" type="submit">Sign in</button></form>');
    	console.log('render view login');
    },
    submitLoginForm: function(e){
        console.log('submitLoginForm');
        e.preventDefault();
    	console.log($(e.target).serializeArray());
    	var auth = $(e.target).serializeArray();
        this.model.save({Username: auth[0].value, Password: auth[1].value });
        console.log(this.model);
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