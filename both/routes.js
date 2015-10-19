FlowRouter.route('/', {
    action: function (params, queryParams) {
        BlazeLayout.render('layout', {
            main: 'landing'
        })
    }
});

//TODO(tim) Prevent access to these routes if user is already signed in
FlowRouter.route('/categories', {
    name: 'categories',
    action: function () {
        BlazeLayout.render('layout', {
            main: 'categories'
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

FlowRouter.route('/categoryEdit/:categoryId', {
    name: 'categoryEdit',
    action: function () {
        BlazeLayout.render('layout', {
            main: 'categoryEdit'
        });
    }
});
