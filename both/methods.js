Meteor.methods({
    'registerSchool': function (doc) {
        if (!Meteor.userId()) {
            throw new Meteor.Error('logged-out', 'The user must be logged in to register a school');
        }
        Schemas.SchoolSchema.clean(doc);
        Roles.addUsersToRoles(Meteor.userId(), ['school-admin']);
        doc.schoolAdmins = [Meteor.userId()];
        Collections.Schools.insert(doc);
    },
    'insertDonationDrive': function (doc) {
        if (!Meteor.userId()) {
            throw new Meteor.Error('logged-out', 'The user must be logged in to register a school');
        }

        var currentSchoolId = doc.schoolId;
        var school = Collections.Schools.findOne({ _id: currentSchoolId });

        if (!school) {
            throw new Meteor.Error('Cannot locate the associated school for the new donation drive.');
        }

        // TODO(lnw) use the autovalue...
        doc.id = Random.id();

        Schemas.DonationDriveSchema.clean(doc);
        check(doc, Schemas.DonationDriveSchema);

        Collections.Schools.update({ _id: school._id }, { $push: { donationDrives: doc } });
    },
    'updateDonationDrive': function (doc) {
        if (!Meteor.userId()) {
            throw new Meteor.Error('logged-out', 'The user must be logged in to edit the donation drive.');
        }

        check(doc, Schemas.DonationDriveSchema);
        Collections.Schools.update(doc);
    },
    'deleteDonationDrive': function (schoolId, donationDriveId) {
        if (!Meteor.userId()) {
            throw new Meteor.Error('logged-out', 'The user must be logged in to delete the donation drive.');
        }

        Collections.Schools.update({ _id: schoolId }, { $pull: { donationDrives: { id: donationDriveId } } });
    }
});