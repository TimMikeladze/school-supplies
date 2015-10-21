var ensureSignedIn = function (context, redirect) {
    var params = context.params;

    if (!Meteor.userId()) {
        redirect('/sign-in', params);
    }
};

var signedIn = FlowRouter.group({
    prefix: '/home',
    triggersEnter: [ensureSignedIn]
});

var adminSection = signedIn.group({
    prefix: '/admin',
    triggersEnter: [function(context, redirect) {
        var params = context.params;

        if (!Roles.userIsInRole(Meteor.userId(), 'admin')) {
            redirect('/403', params);
        }
    }]
});

FlowRouter.route('/', {
    triggersEnter: [
        function (context, redirect) {
            var params = context.params;
            if (Meteor.userId()) {
                redirect('/home', params);
            }
        }
    ],
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

signedIn.route('/', {
    name: 'home',
    action: function () {
        BlazeLayout.render('layout', {
            main: 'home'
        })
    }
});

signedIn.route('/register-school', {
    action: function (params, queryParams) {
        BlazeLayout.render('layout', {
            main: 'registerSchool'
        });
    }
});

signedIn.route('/donation-drives', {
    name: 'donationDrives',
    action: function () {
        BlazeLayout.render('layout', {
            main: 'donationDrives'
        });
    }
});

signedIn.route('/donation-drives/:donationDriveId', {
    name: 'donationDriveEdit',
    action: function () {
        BlazeLayout.render('layout', {
            main: 'donationDriveEdit'
        });
    }
});

adminSection.route('/categories', {
    name: 'categories',
    action: function () {
        BlazeLayout.render('layout', {
            main: 'categories'
        });
    }
});

adminSection.route('/categories/:categoryId', {
    name: 'categoryEdit',
    action: function () {
        BlazeLayout.render('layout', {
            main: 'categoryEdit'
        });
    }
});