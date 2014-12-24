
angular.module("todo").controller("PartyDetailsCtrl", ['$scope', '$stateParams', '$collection',
    function($scope, $stateParams, $collection){
        console.log('======PartyDetailsCtrl======')

        $collection(Parties).bindOne($scope, 'party', $stateParams.partyId, false);
        $collection(Parties).bind($scope, 'parties');
        $collection(Meteor.users).bind($scope, 'users', false, true);

        $scope.saveParty = function(){
            $scope.parties.save($scope.party);
        };
    }]);