Meteor.startup(function () {
    var email = 'admin@admin.com';

    if (!Accounts.findUserByEmail(email)) {
        console.log("Creating super user account");
        var id = Accounts.createUser({
            email: email,
            password: 'password'
        });

        Roles.addUsersToRoles(id, ['adminRole'], 'adminGroup');
    } else {
        console.log("Super user account exists.");
    }
});