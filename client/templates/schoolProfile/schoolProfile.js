Template.schoolProfile.onCreated(function () {
    var self = this;
    self.autorun(function () {
        var schoolId = FlowRouter.getParam('schoolId');
        self.subscribe('school', schoolId);
    });
});

Template.schoolProfile.helpers({
    school: function () {
        var schoolId = FlowRouter.getParam('schoolId');
        return Collections.Schools.findOne({ _id: schoolId });
    }
});