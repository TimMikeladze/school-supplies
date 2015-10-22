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
        return Collections.Schools.findOne({_id: schoolId});
    },
    schoolId: function () {
        return FlowRouter.getParam('schoolId');
    }
});

Template.schoolProfile.events({
    'click .school-direct-donate': function (event, template) {
        Session.set('donationStep', 'chooseCategories');
        Session.set('donationSelectedSchoolId', FlowRouter.getParam('schoolId'));
        Session.set('donationSelectedDriveId', $(event.currentTarget).data('school-drive-id'));
        FlowRouter.go('/donate');
    }
});