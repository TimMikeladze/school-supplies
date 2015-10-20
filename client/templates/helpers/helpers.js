Template.registerHelper('fullName', function () {
    var profile = Meteor.user().profile;
    return profile.firstName + ' ' + profile.lastName;
});

Template.registerHelper('homeUrl', function () {
    return !Meteor.userId() ? '/' : '/home';
});