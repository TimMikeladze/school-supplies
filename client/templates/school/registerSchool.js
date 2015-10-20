Template.registerSchool.helpers({
    registerSchoolSchema: function () {
        var school = Schemas.SchoolSchema.pick(['name', 'numberOfStudents', 'district', 'gradeLevels', 'gradeLevels.$',
            'address', 'address.buildingNumber', 'address.street', 'address.state', 'address.city', 'address.zipCode']);
        return school;
    }
});

Template.registerSchool.events({
    //add your events here
});

Template.registerSchool.onCreated(function () {
    //add your statement here
});

Template.registerSchool.onRendered(function () {
    //add your statement here
});

Template.registerSchool.onDestroyed(function () {
    //add your statement here
});

