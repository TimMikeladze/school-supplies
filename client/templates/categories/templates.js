// Categories templates
Template.categories.onCreated(function (params) {
    var self = this;
    self.autorun(function () {
       self.subscribe('categories');
    });
});

Template.categories.helpers({
    categories: function () {
        return Collections.Categories.find({}, { sort: { createdAt: -1 } });
    }
});

// CategoryView templates
Template.categoryView.events({
    'click .delete': function () {
        Meteor.call('categories/removeCategory', this._id);
    }
});

Template.categoryView.helpers({
    links: function (linkName) {
        return
    }
});