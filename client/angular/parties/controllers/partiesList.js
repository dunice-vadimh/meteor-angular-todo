angular.module("todo").controller("PartiesListCtrl", ['$scope', '$collection',
    function($scope, $collection){
console.log('======PartiesListCtrl======')
        $collection(Parties).bind($scope, 'parties', true, true);
//        $collection(AngularTasks).bind($scope, 'angularTasks', true, true);

        $scope.remove = function(party){
            Meteor.call('deleteParty', party._id)
//            $scope.parties.splice( $scope.parties.indexOf(party), 1 );
        };

        $scope.add = function(party){
            Meteor.call("addParty", party);
//            $scope.parties.splice( $scope.parties.indexOf(party), 1 );
        };


    }]);