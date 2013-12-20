MainApp.Model = {};
MainApp.Model.authentication = Backbone.Model.extend({
	defaults: {
		Username: "",
		Password: "",
		RememberMe: false,
		LoginFailed: false,
		LoginAccepted: false
	},
	url: "api/authentication"
});