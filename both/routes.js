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

//TODO(lnw) protect admin routes
var adminSection = FlowRouter.group({
    prefix: '/admin',
    triggersEnter: [function(context, redirect) {
        var params = context.params;

        if (!Roles.userIsInRole(Meteor.userId(), 'admin')) {
            redirect('/403', params);
        }
    }]
});

adminSection.route('/categories', {
    name: 'categories',
    action: function () {
        BlazeLayout.render('layout', {
            main: 'categories'
        });
    }
});

adminSection.route('/categoryEdit/:categoryId', {
    name: 'categoryEdit',
    action: function () {
        BlazeLayout.render('layout', {
            main: 'categoryEdit'
        });
    }
});

FlowRouter.notFound = {
    name: '404',
    action: function () {
        BlazeLayout.render('layout', {
            main: '404'
        });
    }
};

FlowRouter.route('/403', {
    name: '403',
    action: function () {
       BlazeLayout.render('layout', {
           main: '403'
       });
   }
});
