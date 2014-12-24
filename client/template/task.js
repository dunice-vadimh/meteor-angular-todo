Template.task.rendered = function(){
    var el =$('li.active')
    if (el.length){
        el[0].classList.remove('active')
    }
    el = $('li.clickChangesPage')
    for(var i = 0, len = el.length; i<len; i++){
        var _data = el[i].getAttribute('data-page')
        if(_data == Session.get('page')){
            el[i].classList.add('active')
        }
    }
}

Template.task.helpers({
    tasks: function () {
        if (Session.get("hideCompleted")) {
            // If hide completed is checked, filter tasks
            return Tasks.find({checked: {$ne: true}}, {sort: {createdAt: -1}});
        } else {
            // Otherwise, return all of the tasks
            return Tasks.find({}, {sort: {createdAt: -1}});
        }
    },
    isOwner: function () {
        return this.owner === Meteor.userId();
    }
});

Template.task.events({
    "click .toggle-checked": function () {
        // Set the checked property to the opposite of its current value
        Meteor.call("setChecked", this._id, ! this.checked)
    },
    "click .delete": function () {
        Meteor.call("deleteTask", this._id);
    },
    "click .toggle-private": function () {
        Meteor.call("setPrivate", this._id, ! this.private);
    }
});