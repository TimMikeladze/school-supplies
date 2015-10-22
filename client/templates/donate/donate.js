Template.donate.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('schools');
        self.subscribe('categories');
    });

    Session.set('donationStep', 'searchOrMatch');
});

Template.donate.helpers({
    isStep: function (step) {
        return Session.get('donationStep') == step;
    },
    school: function () {
        return Collections.Schools.findOne(Session.get('donationSelectedSchoolId'));
    },
    donationDrive: function () {
        var school = Collections.Schools.findOne(Session.get('donationSelectedSchoolId'));
        for (var i in school.donationDrives) {
            if (school.donationDrives[i].id == Session.get('donationSelectedDriveId')) {
                return school.donationDrives[i];
            }
        }
    },
    categoryById: function (categoryId) {
        return Collections.Categories.findOne(categoryId);
    }
});

Template.donate.events({
    'click .donate-select-school': function (event, template) {
        event.preventDefault();
        var schoolId = $(event.currentTarget).data('school-id');
        Session.set('donationSelectedSchoolId', schoolId);
        Session.set('donationStep', 'chooseDrive');
    },
    'click .donate-select-drive': function (event, template) {
        event.preventDefault();
        var donationDriveId = $(event.currentTarget).data('school-drive-id');
        Session.set('donationSelectedDriveId', donationDriveId);
        Session.set('donationStep', 'chooseCategories');
    },
    'click #donate-submit-button': function(event, template) {
        event.preventDefault();
    }
});


Template.donate.onRendered(function () {
});

Template.donate.onDestroyed(function () {
    //add your statement here
});
