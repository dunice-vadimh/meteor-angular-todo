Meteor.subscribe("tasks");



Template.body.helpers({
    addClassActive: function(){
        var el =$('li.active')
        if (el.length){
            el[0].classList.remove('active')
        }
        el = $('li.clickChangesPage')
        console.log('==========', el)
        el.forEach(function(item){
            console.log('==========', item, item.getAttribute('data-page'))
            var _data = item.getAttribute('data-page')
            if(_data == Session.get('page')){
                item.classList.add('active')
            }
        })
    },

    hideCompleted: function () {
        return Session.get("hideCompleted");
    },
    isPage: function(page){
        return Session.equals('page', page)
    }
});

Template.body.events({
    "submit .new-task": function (event) {
        // This function is called when the new task form is submitted
        var text = event.target.text.value;

        Meteor.call("addTask", text);

        // Clear form
        event.target.text.value = "";

        // Prevent default form submit
        return false;
    }
//    'click .clickChangesPage': function(event, template){
//       Session.set('page', event.currentTarget.getAttribute('data-page'))
//    }
});



Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
});