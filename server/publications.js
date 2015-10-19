Meteor.publish('categories', function (params) {
    var categoryCursor;

    if (params) {
        check(params, String)
        categoryCursor = Collections.Categories.find({ _id: params });
    } else {
        categoryCursor = Collections.Categories.find({});
    }

    return categoryCursor;
});