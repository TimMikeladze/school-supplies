Meteor.startup(function () {
    if (!Accounts.findUserByEmail(Meteor.settings.admin.email)) {
        console.log("Creating super user account");
        var id = Accounts.createUser({
            email: Meteor.settings.admin.email,
            password: Meteor.settings.admin.password,
            username: Meteor.settings.admin.username
        });

        Roles.addUsersToRoles(id, Meteor.settings.adminRoles);
    } else {
        console.log("Super user account exists.");
    }
});