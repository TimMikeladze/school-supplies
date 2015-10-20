Meteor.startup(function () {
    if (!Accounts.findUserByEmail(Meteor.settings.admin.email)) {
        console.log("Creating super user account");
        var id = Accounts.createUser({
            email: Meteor.settings.admin.email,
            password: Meteor.settings.admin.password
        });

        Roles.addUsersToRoles(id, ['admin']);
    } else {
        console.log("Super user account exists.");
    }
});