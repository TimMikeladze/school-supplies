Template.landing.onRendered(function () {
    $('.parallax').parallax();
});

Template.landing.events({
    'click #donate-button': function (event, template) {
        event.preventDefault();
        FlowRouter.go('/donate');
    }
});