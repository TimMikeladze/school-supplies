function schoolsCursor() {
    return Collections.Schools.find({});
}

function donationsCursor() {
    return Collections.Donations.find({});
}

Template.home.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('schools');
        self.subscribe('mySchools');
        self.subscribe('donations');
        self.subscribe('categories');
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
        debugger;
        var school = Collections.Schools.findOne({ _id: this.schoolId });

        for (var i in school.donationDrives) {
            if (school.donationDrives[i].id == this.donationDriveId) {
                return school.donationDrives[i].title;
            }
        }
    },
    userHasNoDonations: function () {
        return Collections.Donations.find({}).count() == 0;
    },
    donatedCategoryName: function () {
        return Collections.Categories.findOne({ _id: this.categoryId }).title;
    }
});

Template.home.onRendered(function () {
    $('.collapsible').collapsible({
        accordion : false
    });

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