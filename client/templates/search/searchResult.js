Template.searchResult.helpers({

});

Template.searchResult.events({
    'click .search-result': function(event, template) {
        Session.set('isSearchBarActive', false);
    }
});

Template.searchResult.onCreated(function () {
    //add your statement here
});

Template.searchResult.onRendered(function () {
    //add your statement here
});

Template.searchResult.onDestroyed(function () {
    //add your statement here
});
