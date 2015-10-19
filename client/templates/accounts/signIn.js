Template.signIn.helpers({
    //add you helpers here
});

Template.signIn.events({
    'click #at-signUp': function (event, template) {
        event.preventDefault();
        FlowRouter.go('/sign-up');
    }
});

Template.signIn.onCreated(function () {
    //add your statement here
});

Template.signIn.onRendered(function () {
    //add your statement here
});

Template.signIn.onDestroyed(function () {
    //add your statement here
});

