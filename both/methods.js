Meteor.methods({
    'registerSchool': function (doc) {
        if (!Meteor.userId()) {
            throw new Meteor.Error('logged-out', 'The user must be logged in to register a school');
        }
        Roles.addUsersToRoles(Meteor.userId(), ['school-admin']);
        doc.schoolAdmins = [Meteor.userId()];
        Collections.Schools.insert(doc);
    },
    'insertDonationDrive': function (doc) {
        console.log(doc);

        var school = Collections.Schools.findOne({ createdBy: Meteor.userId() });
        console.log(school);
        school.donationDrives.push(doc);
    }
});