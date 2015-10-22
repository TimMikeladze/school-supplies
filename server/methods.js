Meteor.methods({
    'updateDonationDrive': function (doc) {
        if (!Meteor.userId()) {
            throw new Meteor.Error('logged-out', 'The user must be logged in to edit the donation drive.');
        }

        console.log(doc);
        var associatedSchool = Collections.Schools.findOne({ _id: doc.$set.schoolId });

        console.log(associatedSchool);
        for (var i in associatedSchool.donationDrives) {
            if (associatedSchool.donationDrives[i]._id == doc.id) {
                break;
            }
        }

        check(doc, Schemas.DonationDriveSchema);
        var someObj = doc.$set;
        var newObj = {
            $set: {
                'donationDrives.$' : someObj
            }
        };

        Collections.Schools.update({ _id: doc.schoolId, 'donationDrives.id': doc.id }, doc);
    }
});