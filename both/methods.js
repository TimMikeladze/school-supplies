Meteor.methods({
    'registerSchool': function (doc) {
        if (!Meteor.userId()) {
            throw new Meteor.Error('logged-out', 'The user must be logged in to register a school');
        }
        Roles.addUsersToRoles(Meteor.userId(), ['school-admin']);
        doc.schoolAdmins = [Meteor.userId()];
        Collections.Schools.insert(doc);
    }
});