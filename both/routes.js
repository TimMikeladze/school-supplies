FlowRouter.route('/', {
    action: function (params, queryParams) {
        BlazeLayout.render('layout', {
            main: 'landing'
        });
    }
});

FlowRouter.route('/sign-up', {
    action: function (params, queryParams) {
        BlazeLayout.render('layout', {
            main: 'signUp'
        });
    }
});

FlowRouter.route('/sign-in', {
    action: function (params, queryParams) {
        BlazeLayout.render('layout', {
            main: 'signIn'
        });
    }
});

FlowRouter.route('/schoolprofile', {
	name: 'schoolprofile',
    action: function () {
        BlazeLayout.render('layout', {
        	main: 'schoolprofile',  
        });
    }
});