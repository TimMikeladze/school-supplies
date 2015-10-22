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
    },
    donationConfirmation: function () {
        return Session.get('donation');
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
    'click #donate-submit-button': function (event, template) {
        //TODO(tim) Fix this client side insert
        event.preventDefault();
        var categories = [];

        $('.donate-drive-category').each(function () {
            if (this.value) {
                var obj = {
                    title: Collections.Categories.findOne(this.id).title,
                    categoryId: this.id,
                    quantity: this.value
                };
            }
            categories.push(obj);
        });

        var donation = {
            schoolId: Session.get('donationSelectedSchoolId'),
            donationDriveId: Session.get('donationSelectedDriveId'),
            donatedCategories: categories
        };

        Session.set('donation', donation);
        if (Meteor.user()) {
            Session.set('donationStep', 'confirmDonation');
        } else {
            Session.set('donationStep', 'userAccount');
        }
    },
    'click #donate-confirm-button': function(event, template) {
        event.preventDefault();

        var donation = Session.get('donation');
        donation.donorId = Meteor.userId();

        Collections.Donations.insert(donation);

        Session.set('donationStep', 'thankYou');
    }
});


Template.donate.onRendered(function () {
});

Template.donate.onDestroyed(function () {
    //add your statement here
});
