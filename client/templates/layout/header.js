Template.header.onRendered(function () {
    this.autorun(function () {
        if (Meteor.userId()) {
            Tracker.afterFlush(function () {
                $(".dropdown-button").dropdown({
                    belowOrigin: true
                });
            });
        }
    });

    $(".dropdown-button").dropdown({
        belowOrigin: true
    });
    $(".button-collapse").sideNav();
});

Template.header.helpers({
    isSearchBarActive: function () {
        return Session.get('isSearchBarActive');
    }
});

Template.header.events({
    'click .button-search': function (event, template) {
        Session.set('isSearchBarActive', !Session.get('isSearchBarActive'));
    },
    'click .meteor-logout': function (event, template) {
        Meteor.logout(function () {
            Session.set('isSearchBarActive', false);
            FlowRouter.go('/');
        });
    }
});