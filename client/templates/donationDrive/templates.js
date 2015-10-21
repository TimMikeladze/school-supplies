Template.donationDrives.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('categories');
        self.subscribe('donationDrives');
    });
});

Template.donationDrives.helpers({
    donationDrives: function () {
       return Collections.DonationDrives.find({}, { sort: { startDate: -1 } });
    }
});

Template.donationDriveView.helpers({
    canEditDrive: function () {
        return this.startDate.getTime() > new Date().getTime();
    }
});

Template.donationDriveView.events({
    'click .delete': function () {
        Collections.DonationDrives.remove(this._id);
    }
});

Template.donationDriveEdit.onCreated(function () {
   var self = this;
    self.autorun(function () {
        self.subscribe('donationDrives');
        self.subscribe('categories');
    });
});

Template.donationDriveEdit.helpers({
    donationDoc: function () {
        var donationDriveId = FlowRouter.getParam('donationDriveId');
        return Collections.DonationDrives.findOne({ _id: donationDriveId });
    }
});

Template.newDonationDrive.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('categories');
    });
});


AutoForm.hooks({
    newDonationDrive:  {
        formToDoc: function (doc) {
            var schoolId = FlowRouter.getParam('schoolId');
            console.log(schoolId);
            doc._id = schoolId;

            return doc;
        }
    }
});