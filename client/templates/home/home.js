function schoolsCursor() {
    return Collections.Schools.find({});
}

function donationsCursor() {
    return Collections.Donations.find({});
}

Template.home.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('mySchools');
        self.subscribe('donations');
    });
});

Template.home.helpers({
    schools: function () {
        return schoolsCursor();
    },
    canEditDrive: function () {
        return this.startDate.getTime() > new Date().getTime();
    },
    drivesDonatedTo: function () {
        return donationsCursor();
    },
    donationDriveName: function () {
        var school = Collections.Schools.findOne({ _id: this.schoolId });

        for (var i in school.donationDrives) {
            if (school.donationDrives[i].id == this.donationDriveId) {
                return school.donationDrives[i].title;
            }
        }
    }
    /*,
    totalContributions: function () {
        var allUserDonations = Collections.Donation.find({}).fetch();

        for (var i in allUserDonations) {
            var individualDonation = i.donatedCategories;
            for (var j in individualDonation) {
                console.log();
            }
        }
    }*/
});

Template.home.onRendered(function () {
    this.autorun(function () {
        var schoolCount = schoolsCursor().count();
        var donationsCount = donationsCursor().count();

        Tracker.afterFlush(function () {
            this.$('.collapsible').collapsible({
                accordion : false
            });
        }.bind(this))
    }.bind(this));
});