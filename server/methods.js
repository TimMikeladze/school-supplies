Meteor.methods({
    'updateDonationDrive': function (doc) {
        if (!Meteor.userId()) {
            throw new Meteor.Error('logged-out', 'The user must be logged in to edit the donation drive.');
        }

        check(doc, Schemas.DonationDriveSchema);
        var newObj = {
            $set: {
                'donationDrives.$' : doc.$set
            }
        };

        Collections.Schools.update({ _id: doc.$set.schoolId, 'donationDrives.id': doc.$set.id }, newObj);
    }
});