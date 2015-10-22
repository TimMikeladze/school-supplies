Template.editSchool.onCreated(function () {
    var self = this;
    self.autorun(function () {
        var schoolId = FlowRouter.params('schoolId');
        self.subscribe('school', schoolId);
    });
});

Template.editSchool.