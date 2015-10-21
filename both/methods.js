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
        if (!Meteor.userId()) {
            throw new Meteor.Error('logged-out', 'The user must be logged in to register a school');
        }
        var currentSchoolId = doc._id;
        var school = Collections.Schools.findOne({ _id: currentSchoolId });
        console.log(school);

        if (!)
        school.donationDrives.push(doc);
    }
});