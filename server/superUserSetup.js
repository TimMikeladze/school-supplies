Meteor.startup(function () {
    if (!Meteor.users.findOne()) {
        console.log("Creating super user account");
        var id = Accounts.createUser({
            email: Meteor.settings.admin.email,
            password: Meteor.settings.admin.password,
            username: Meteor.settings.admin.username,
            firstName: Meteor.settings.admin.firstName,
            lastName: Meteor.settings.admin.lastName
        });

        Roles.addUsersToRoles(id, ['admin']);
    } else {
        console.log("Super user account exists.");
    }
});