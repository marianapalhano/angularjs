(function() {
    'use strict';
    angular.module('MsgApp', [])
        .controller('MsgController', MsgController);
        
        MsgController.$inject = ['$scope'];       

        function MsgController ($scope) {
            $scope.name = "Mariana";
            $scope.state = "hungry";

            $scope.sayMessage = function() {
                return "Hello World!";
            }

            $scope.feedPuppy = function() {
                $scope.state = "happy";
            }
        }
})();