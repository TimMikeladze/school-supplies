function schoolsCursor() {
    return Collections.Schools.find({});
}

Template.home.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('schools');
    });
});

Template.home.helpers({
    schools: function () {
        return schoolsCursor();
    },
    canEditDrive: function () {
        return this.startDate.getTime() > new Date().getTime();
    }
});

Template.home.onRendered(function () {
    this.autorun(function () {
        var schoolCount = schoolsCursor().count();

        Tracker.afterFlush(function () {
            this.$('.collapsible').collapsible({
                accordion : false
            });
        }.bind(this))
    }.bind(this));
});