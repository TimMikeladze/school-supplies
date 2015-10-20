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
var adminSection = FlowRouter.group({
    prefix: '/admin',
    triggersEnter: [function(context, redirect) {
        var params = context.params;

        //TODO(lnw) add this form
        var newRoute = '/403';

        console.log(context);
        console.log(params);

        console.log(Meteor.userId());
        console.log(Roles.userIsInRole(Meteor.userId(), Meteor.settings.adminRoles));


        if (Roles.userIsInRole(Meteor.userId(), Meteor.settings.adminRoles)) {
            redirect(newRoute, params);
            //FlowRouter.go(FlowRouter.path(newRoute));
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
