Template.registerHelper('fullName', function () {
    var profile = Meteor.user().profile;
    return profile.firstName + ' ' + profile.lastName;
});
