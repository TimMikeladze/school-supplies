FlowRouter.route('/', {
    action: function (params, queryParams) {
        BlazeLayout.render('layout', {
            main: 'landing'
        })
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
FlowRouter.route('/admin/categories', {
    name: 'categories',
    triggersEnter: [function(context, redirect) {
        var params = context.params;

        //TODO(lnw) add this form
        var newRoute = 'invalid-permissions';

        console.log(context);
        console.log(params);

        console.log(Meteor.userId());
        console.log(Roles.userIsInRole(this.userId, Meteor.settings.adminRoles));


        if (!Roles.userIsInRole(this.userId, Meteor.settings.adminRoles)) {
            redirect(newRoute, params);
        }
    }],
    action: function () {
        BlazeLayout.render('layout', {
            main: 'categories'
        });
    }
});

FlowRouter.route('/admin/categoryEdit/:categoryId', {
    name: 'categoryEdit',
    action: function () {
        BlazeLayout.render('layout', {
            main: 'categoryEdit'
        });
    }
});

FlowRouter.route('/invalid-permissions', {
    name: 'invalid-permissions',
    action: function () {
        BlazeLayout.render('layout', {
            main: 'invalid-permissions'
        });
    }
});
