Meteor.publish('categories', function () {
    if (this.userId) {
        return Collections.Categories.find({});
    } else {
        this.stop();
        return;
    }
});

Meteor.publish('schools', function () {
    if (Roles.userIsInRole(this.userId, ['school-admin'])) {
        return Collections.Schools.find({schoolAdmins: {$in: [this.userId]}});
    } else {
        this.stop();
        return;
    }
});