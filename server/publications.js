Meteor.publish('categories', function () {
    if (Roles.userIsInRole(this.userId, ['admin'])) {
        return Collections.Categories.find({});
    } else {
        this.stop();
        return;
    }
});