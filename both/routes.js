//TODO(tim) Render home page if user is logged in
FlowRouter.route('/', {
    action: function (params, queryParams) {
        BlazeLayout.render('layout', {
            main: 'landing'
        });
    }
});

//TODO(tim) Prevent access to these routes if user is already signed in
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

FlowRouter.route('/register-school', {
   action: function(params, queryParams) {
       register-school
   }

});