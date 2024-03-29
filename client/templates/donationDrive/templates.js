Template.donationDriveEdit.onCreated(function () {
   var self = this;
    self.autorun(function () {
        self.subscribe('categories');
        self.subscribe('mySchools');
    });
});

Template.donationDriveEdit.helpers({
    donationDoc: function () {
        var donationDriveId = FlowRouter.getParam('donationDriveId');
        var schoolId = FlowRouter.getParam('schoolId');
        var school = Collections.Schools.findOne({ _id: schoolId });

        for (var drive in school.donationDrives) {
            if (school.donationDrives[drive].id == donationDriveId) {
                var locatedDrive = school.donationDrives[drive];
                break;
            }
        }

        return locatedDrive;
    }
});

Template.donationDriveEdit.events({
    'click .delete': function () {
        Meteor.call('deleteDonationDrive', this.schoolId, this.id);
        FlowRouter.go('/home');
    }
});

Template.newDonationDrive.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('categories');
        self.subscribe('mySchools');
    });
});

AutoForm.hooks({
    newDonationDriveForm:  {
        before: {
            'method': function (doc) {
                doc.schoolId = FlowRouter.getParam('schoolId');
                return doc;
            }
        },
        after: {
            'method': function () {
                FlowRouter.go('/home');
            }
        }
    },
    donationDriveEditForm: {
        before: {
            'method-update': function (doc) {
                doc.$set.id = FlowRouter.getParam('donationDriveId');
                doc.$set.schoolId = FlowRouter.getParam('schoolId');
                return doc;
            }
        },
        after: {
            'method-update': function () {
                FlowRouter.go('/home');
            }
        }
    }
});