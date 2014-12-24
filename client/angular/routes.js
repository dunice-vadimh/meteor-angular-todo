angular.module("todo").config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
    function($urlRouterProvider, $stateProvider, $locationProvider){

        $locationProvider.html5Mode(true);

        $stateProvider
            .state('parties', {
                url: '/parties',
//                views:{
                    template: UiRouter.template('parties-list.html'),
                    controller: 'PartiesListCtrl'
//                }

            })
            .state('angular.partyDetails', {
                url: '/parties/:partyId',
                template: UiRouter.template('party-details.html'),
                controller: 'PartyDetailsCtrl'
            });

//            $urlRouterProvider.otherwise("/angular");
    }]);