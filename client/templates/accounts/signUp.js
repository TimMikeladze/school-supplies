Template.signUp.helpers({
   
});

Template.signUp.events({
    'click #at-signIn': function(event, template) {
        event.preventDefault();
        FlowRouter.go('/sign-in');
    }
});

Template.signUp.onCreated(function () {
    //add your statement here
});

Template.signUp.onRendered(function () {
    //add your statement here
});

Template.signUp.onDestroyed(function () {
    //add your statement here
});

