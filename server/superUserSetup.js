Meteor.startup(function () {
    if (!Meteor.users.findOne()) {

        var id = Accounts.createUser({
            email: Meteor.settings.admin.email,
            password: Meteor.settings.admin.password,
            username: Meteor.settings.admin.username,
            profile: {
                firstName: Meteor.settings.admin.firstName,
                lastName: Meteor.settings.admin.lastName
            }
        });

        Roles.addUsersToRoles(Meteor.users.findOne()._id, ['admin']);
    }
})
;