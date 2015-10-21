Template.schoolProfile.helpers({
    schoolProfileDoc: function () {
        var schoolId = FlowRouter.getParam('schoolId');
        return Collections.Schools.findOne(schoolId);
    }
});

// Categories templates
Template.schoolProfile.onCreated(function (schoolId) {
    var self = this;
    var schoolId = FlowRouter.getParam('schoolId');
    self.autorun(function () {
       self.subscribe('school',schoolId);
    });
});
