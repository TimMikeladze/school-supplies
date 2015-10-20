Meteor.publish('categories', function (params) {
    return Collections.Categories.find({});
});