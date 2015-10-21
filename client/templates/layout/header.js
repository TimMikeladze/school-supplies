Template.header.onRendered(function () {
    $(".button-collapse").sideNav();
    $(".dropdown-button").dropdown({
        belowOrigin: true
    });
});

Template.header.helpers({
    isSearchBarActive: function () {
        return Session.get('isSearchBarActive');
    }
});

Template.header.events({
    'click .button-search': function (event, template) {
        Session.set('isSearchBarActive', !Session.get('isSearchBarActive'));
    }
});