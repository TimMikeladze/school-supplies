Template.registerHelper('fullName', function () {
    var profile = Meteor.user().profile;
    return profile.firstName + ' ' + profile.lastName;
});

Template.registerHelper('homeUrl', function () {
    return !Meteor.userId() ? '/' : '/home';
});

Template.registerHelper('donationDriveFormFields', function () {
    return "title, description, startDate, endDate, wishlist, wishlist.$.categoryId, wishlist.$.isUnlimited, wishlist.$.requested, wishlist.$.notes";
});

Template.registerHelper('donationDriveFormOmitFields', function () {
    return "id, createdBy, active, wishlist.$.received";
});

Template.registerHelper('pageTitle', function () {
    return Session.get('pageTitle');
});
