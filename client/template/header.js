Template.header.helpers({
    incompleteCount: function () {
        return Tasks.find({checked: {$ne: true}}).count();
    }
});

Template.header.events({
    "change .hide-completed input": function (event) {
        Session.set("hideCompleted", event.target.checked);
    }
});