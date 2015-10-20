Meteor.publish('categories', function () {
    if (Roles.userIsInRole(this.userId, Meteor.settings.adminRoles)) {
        return Collections.Categories.find({});
    } else {
        this.stop();
        return;
    }
});