// Categories templates
Template.categories.onCreated(function () {
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

// CategoryEdit templates
Template.categoryEdit.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('categories');
    });
});

Template.categoryEdit.helpers({
    categoryDoc: function () {
        var categoryId = FlowRouter.getParam('categoryId');
        return Collections.Categories.findOne({ _id: categoryId });
    }
});