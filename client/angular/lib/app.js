if (Meteor.isClient) {
    angular.module('todo',['angular-meteor', 'ui.router']);

    Meteor.startup(function () {
        angular.bootstrap(document, ['todo']);
    });
}

