Template.home.rendered = function(){
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

Template.home.helpers({

    hide: function () {
        console.log('........123', Template.header)

    }
});


Template.home.events({
//    "click .toggle-checked": function () {
//        // Set the checked property to the opposite of its current value
//        Meteor.call("setChecked", this._id, ! this.checked)
//    },
//    "click .delete": function () {
//        Meteor.call("deleteTask", this._id);
//    },
//    "click .toggle-private": function () {
//        Meteor.call("setPrivate", this._id, ! this.private);
//    }
});