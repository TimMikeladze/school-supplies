Meteor.publish('categories', function () {
    return Collections.Categories.find({});
});