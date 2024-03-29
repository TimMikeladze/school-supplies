Meteor.publish('categories', function () {
    return Collections.Categories.find({});
});

Meteor.publish('mySchools', function () {
    if (Roles.userIsInRole(this.userId, ['school-admin'])) {
        return Collections.Schools.find({schoolAdmins: {$in: [this.userId]}});
    } else {
        this.stop();
        return;
    }
});

Meteor.publish('donations', function () {
    if (this.userId) {
        return Collections.Donations.find({donorId: this.userId});
    } else {
        this.stop();
        return;
    }
});

Meteor.publish('schools', function () {
    return Collections.Schools.find({});
});

Meteor.publish('school', function (schoolId) {
    return Collections.Schools.find({_id: schoolId});
});